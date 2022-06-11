<template>
  <v-card>
    <v-card-title>
      <span class="headline" v-if="loading">Loading data</span>
      <span class="headline" v-else-if="item">{{module.charAt(0).toUpperCase() + module.slice(1, -1) + ' ' + item.username}}</span>
      <span class="headline" v-else>Create new {{module.charAt(0).toUpperCase() + module.slice(1, -1)}}</span>
    </v-card-title>
    <v-card-text v-if="item && !loading">
      <v-container grid-list-md>
        <v-layout wrap v-for="column in columns" v-bind:key="column.text">
          <v-flex xs12 sm4>
            <v-subheader>{{column.text}}</v-subheader>
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
      columns: this.$store.state[this.module].columns,
      item: null
    }
  },
  props: {
    module: {
      type: String,
      required: false
    }
  },
  methods: {
    refresh () {
      const self = this
      this.loading = true
      this.$store.dispatch(this.module + '/find', self.$router.history.current.params.id)
        .then((response) => {
          this.loading = false
          this.item = this.$store.state[this.module].items.find(_item => _item.username === self.$router.history.current.params.id)
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
