<template>
  <div>
    <v-data-table :headers="columns" :items="items" :loading="loading" class="elevation-1">
      <template slot="items" slot-scope="props">
        <router-link tag="tr" :to="{ name: module.charAt(0).toUpperCase() + module.slice(1) + 'Details', params: { id: props.item.username }}">
          <td v-for="column in columns" v-bind:key="column.value"> {{props.item[column.value]}} </td>
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      items: this.$store.state[this.module].items,
      columns: this.$store.state[this.module].columns
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
      this.loading = true
      this.$store.dispatch(this.module + '/findBy', {})
        .then(() => {
          this.loading = false
          this.items = this.$store.state[this.module].items
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
