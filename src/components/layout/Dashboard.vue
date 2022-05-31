<template>
  <v-app>
    <Navigation />
    <v-content class="grey lighten-3">
      <v-container fluid grid-list-lg>
        <Toolbar />
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
