<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from './layout/Navigation'
export default {
  name: 'Layout',
  components: {
    Navigation
  },
  data () {
    return {
    }
  }
}
</script>
