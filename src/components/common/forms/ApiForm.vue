<template>
  <v-card>
    <v-card-title>
      <span class="headline" v-if="loading">Loading data</span>
      <span class="headline" v-else-if="item">{{collection.charAt(0).toUpperCase() + collection.slice(1, -1) + ' ' + item.username}}</span>
      <span class="headline" v-else>Create new {{collection.charAt(0).toUpperCase() + collection.slice(1, -1)}}</span>
    </v-card-title>
    <v-card-text v-if="item && !loading">
      <v-container grid-list-md>
        <v-layout wrap v-for="column in columns" v-bind:key="column.text">
          <v-flex xs12 sm4>
            <v-subheader class="text-sm-left">{{column.text}}</v-subheader>
          </v-flex>
          <v-flex xs12 sm8>
            <v-text-field :label="column.text" :value="item[column.value]"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      editing: false,
      columns: this.$store.state[this.collection].columns,
      item: null
    }
  },
  props: {
    collection: {
      type: String,
      required: false
    }
  },
  methods: {
    refresh () {
      const self = this
      this.loading = true
      this.$store.dispatch(this.collection + '/find', self.$router.history.current.params.id)
        .then((response) => {
          this.loading = false
          this.item = this.$store.state[this.collection].items.find(_item => _item.username === self.$router.history.current.params.id)
        })
        .catch(() => {
          this.loading = false
        })
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>
