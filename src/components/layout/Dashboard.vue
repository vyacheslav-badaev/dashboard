<template>
  <v-app>
    <Navigation />
    <v-content class="grey lighten-3">
      <Toolbar />
      <v-divider class="divider-toolbar"/>
      <v-container fluid grid-list-lg>
        <router-view />
      </v-container>
      <v-snackbar bottom right multi-line v-model="snackbar">
        {{snackbarMessage}}
        <v-btn flat color="red accent-4" @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>
<script>
import Navigation from '../common/layout/Navigation'
import Toolbar from '../common/layout/Toolbar'
export default {
  name: 'DashboardLayout',
  data () {
    return {
      snackbar: false
    }
  },
  computed: {
    snackbarMessage () {
      return this.$store.state.ui.snackbarMessage
    }
  },
  watch: {
    snackbar (newValue, oldValue) {
      if (!newValue) {
        this.$store.dispatch('ui/setSnackbarMessage', '')
      }
    },
    snackbarMessage (newValue, oldValue) {
      if (!(!newValue || newValue.length === 0)) {
        this.snackbar = true
      }
    }
  },
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
