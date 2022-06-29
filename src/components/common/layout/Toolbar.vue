<template>
  <v-toolbar app flat color="grey lighten-3">
    <v-toolbar-title class="font-poiret-one"><h3><b>{{title}}</b></h3></v-toolbar-title>
    <v-spacer />
    <v-spacer />
    <v-btn v-for="button in buttons" :key="button.id" :id="button.id" v-on:click="button.action" :flat="button.flat" :color="button.color">{{button.title}}</v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Toolbar',
  computed: {
    title () {
      return this.$store.state.ui.toolbarTitle
    },
    buttons () {
      return this.$store.state.ui.toolbarButtons
    }
  }
}
</script>
