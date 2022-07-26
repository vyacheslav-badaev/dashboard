<template>
  <v-layout row wrap>
    <v-flex d-flex xs2>
      <v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Demo',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.DemoToolbarTitle)
  }
}
</script>
