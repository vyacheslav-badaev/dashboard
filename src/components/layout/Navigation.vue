<template>
  <v-navigation-drawer app permanent :mini-variant="mini" class="">
    <v-toolbar class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar size="48">
            <img src="./../../assets/logos/spear/spear-logo.png" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-3">
      <v-list-tile v-for="item in items" :key="item.title" @click="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
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
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https:          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Doe</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon>
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
      title: 'Spartan Dashboard',
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Calender', icon: 'view_day' },
        { title: 'Students', icon: 'school' },
        { title: 'Teachers', icon: 'supervisor_account' },
        { title: 'Servicedesk employees', icon: 'ac_unit' },
        { title: 'Admins', icon: 'verified_user' }
      ]
    }
  }
}
</script>
