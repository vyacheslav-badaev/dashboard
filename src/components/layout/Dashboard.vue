<template>
  <v-app>
    <Navigation />
    <v-content class="grey lighten-3">
      <Toolbar />
      <v-divider class="divider-toolbar"/>
      <v-container fluid grid-list-lg>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from '../common/layout/Navigation'
import Toolbar from '../common/layout/Toolbar'
export default {
  name: 'DashboardLayout',
  components: {
    Navigation,
    Toolbar
  }
}
</script>
<style>
  .divider-toolbar{
    position: fixed;
  }
</style>
