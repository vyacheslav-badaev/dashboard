<template>
  <v-toolbar app flat color="grey lighten-3">
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-text-field flat solo-inverted prepend-icon="search" label="Search" clearable class="mx-5"/>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
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
