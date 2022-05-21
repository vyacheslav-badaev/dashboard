<template>
  <v-toolbar app color="white">
    <v-toolbar-title>{{title}}</v-toolbar-title>
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
