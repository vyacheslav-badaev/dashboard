<template>
  <div>
    <v-data-table :headers="columns" :items="items" :loading="loading" class="elevation-1">
      <template slot="items" slot-scope="props">
        <router-link tag="tr" :to="{ name: collection.charAt(0).toUpperCase() + collection.slice(1) + 'Details', params: { id: props.item.username }}">
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
      items: this.$store.state[this.collection].items,
      columns: this.$store.state[this.collection].columns
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
      this.loading = true
      this.$store.dispatch(this.collection + '/findBy', {})
        .then(() => {
          this.loading = false
          this.items = this.$store.state[this.collection].items
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
