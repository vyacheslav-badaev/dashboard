<template>
  <v-navigation-drawer dark app permanent :mini-variant="mini" class="grey darken-4">
    <v-toolbar flat class="transparent" :v-ripple="false">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar size="48">
            <img v-if="!loading" src="../../../assets/logos/spear/spear-logo.png" >
            <v-progress-circular v-else indeterminate color="red darken-3" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="font-pacifico header-title"><h1>{{title}}</h1></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider/>
    <v-list class="pt-3">
      <v-list-tile v-for="item in items" :key="item.title" :to="item.link" active-class="red--text text--darken-3">
        <v-tooltip right open-delay="0" close-delay="0" :disabled="!mini">
            <v-list-tile-action slot="activator">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
          <span>{{ item.title }}</span>
        </v-tooltip>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-footer flat absolute height="auto" class="transparent">
      <v-list class="pr-0 footer--absolute">
        <v-list-tile>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>{{mini ? 'chevron_right' : 'chevron_left'}}</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Collapse sidebar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile avatar class="pt-2">
          <v-list-tile-avatar>
            <v-avatar size="40" class="grey darken-2">
              <span v-if="initials" class="white--text">{{initials}}</span>
              <v-icon v-else dark>account_circle</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{username}}</v-list-tile-title>
            <v-list-tile-sub-title>{{usergroup}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click="logout">
              <v-icon>exit_to_app</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-footer>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      mini: true,
      loading: false,
      title: this.$store.state.ui.navigationTitle,
      username: this.$store.state.auth.username,
      usergroup: this.$store.getters['auth/getAccountType'],
      items: this.$store.state.ui.navigationItems
    }
  },
  computed: {
    initials () {
      return this.username.match(/[A-Z]/g) ? this.username.match(/[A-Z]/g).join('') : false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.push({name: 'Login'})
        })
    }
  }
}
</script>
<style>
  .header-title{
    overflow: visible;
  }
  .header-title > h1{
    font-weight: normal;
  }
</style>
