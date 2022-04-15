<template>
  <v-app>
    <v-navigation-drawer app fixed :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-avatar size="45px" tile>
        <img src="./assets/logos/spear/spear-logo.png" alt="Vuetify">
      </v-avatar>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">{{title}}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view>
        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Spartan Dashboard',
      drawer: true,
      items: [
        {icon: 'people', text: 'Students', link: 'todo'},
        {icon: 'school', text: 'Teachers', link: 'todo'},
        {icon: 'room_service', text: 'Servicedesk Employees', link: 'todo'},
        {icon: 'supervisor_account', text: 'Admins', link: 'todo'}
      ]
    }
  }
}
</script>
<style>
</style>
