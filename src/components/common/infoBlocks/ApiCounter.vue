<template>
  <v-card :color="color" class="white--text" :to="collection">
    <v-card-text v-if="error" class="text-xs-center">
      <p class="display-4 font-frederica-the-great">X</p>
      <p class="subheading">{{name ? name : collection.charAt(0).toUpperCase() + collection.slice(1)}}</p>
    </v-card-text>
    <v-card-text v-else-if="!loading" class="text-xs-center">
      <p class="display-4 font-frederica-the-great">{{this.items.length}}</p>
      <p class="subheading">{{name ? name : collection.charAt(0).toUpperCase() + collection.slice(1)}}</p>
    </v-card-text>
    <v-card-text v-else class="text-xs-center">
      <v-progress-circular :size="100" indeterminate></v-progress-circular>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      error: false
    }
  },
  computed: {
    items () {
      return this.$store.state[this.collection].items
    }
  },
  props: {
    collection: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    }
  },
  methods: {
    refresh () {
      this.loading = true
      this.error = false
      this.$store.dispatch(this.collection + '/findBy', {})
        .then(() => {
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          this.error = error.message
          this.$store.dispatch('ui/setSnackbarMessage', error.message)
        })
    }
  },
  created () {
    if (this.items.length < 1) {
      this.refresh()
    }
  }
}
</script>
