<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid grid-list-lg>
        <Toolbar />
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from './layout/Navigation'
import Toolbar from './layout/Toolbar'
export default {
  name: 'Layout',
  components: {
    Navigation,
    Toolbar
  }
}
</script>
