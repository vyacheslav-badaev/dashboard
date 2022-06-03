<template>
  <v-toolbar app flat color="grey lighten-3">
    <v-toolbar-title class="font-poiret-one"><h3><b>{{title}}</b></h3></v-toolbar-title>
    <v-spacer />
    <v-spacer />
    <v-btn flat color="green">Create new Student</v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Toolbar',
  computed: {
    title () {
      return this.$store.state.ui.toolbarTitle
    }
  }
}
</script>
