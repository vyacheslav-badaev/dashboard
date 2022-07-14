<template>
  <div>
    <v-data-table :headers="columns" :items="items" :loading="loading" class="elevation-1">
      <template slot="items" slot-scope="props">
        <router-link tag="tr" :to="{ name: collection.charAt(0).toUpperCase() + collection.slice(1) + 'Details', params: { id: props.item[key] }}">
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
      key: this.$store.state[this.collection].primaryKey,
      columns: this.$store.state[this.collection].columns,
      buttons: [
        {
          id: this._uid + this.collection + 'newButton',
          title: 'Create new ' + this.collection,
          color: 'green',
          flat: true,
          action: this.onCreateNewButtonClick
        }
      ]
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
    }
  },
  methods: {
    refresh () {
      this.loading = true
      this.$store.dispatch(this.collection + '/findBy', {})
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    onCreateNewButtonClick () {
      this.$router.push({path: this.collection + '/new'})
    }
  },
  created () {
    const self = this
    this.buttons.forEach(function (button) {
      self.$store.dispatch('ui/addToolbarButton', button)
    })
    this.refresh()
  },
  beforeDestroy () {
    const self = this
    this.buttons.forEach(function (button) {
      self.$store.dispatch('ui/removeToolbarButton', button)
    })
  }
}
</script>
