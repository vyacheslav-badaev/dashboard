<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view />
      </v-container>
      <v-snackbar v-model="snackbar">
        {{buildInfo}}
      </v-snackbar>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from './layout/Navigation'
import moment from 'moment'
export default {
  name: 'Layout',
  components: {
    Navigation
  },
  data () {
    return {
      title: 'Spartan Dashboard',
      snackbar: true
    }
  },
  computed: {
    buildInfo () {
      return 'Build on ' +
        new Date(parseInt(process.env.BUILD_TIME_UNIX_TIMESTAMP)).toLocaleString() +
        ' (' + moment(parseInt(process.env.BUILD_TIME_UNIX_TIMESTAMP)).fromNow() + ') ' +
        ' from commit ' + process.env.BUILD_TIME_COMMIT_HASH.slice(0, 8)
    }
  }
}
</script>
