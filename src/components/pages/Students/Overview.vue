<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.username }}</td>
      <td>{{ props.item.firstname }}</td>
      <td>{{ props.item.lastname }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'StudentsOverview',
  data () {
    return {
      headers: [
        {
          text: 'Username',
          align: 'left',
          value: 'username'
        },
        { text: 'First name', value: 'firstname' },
        { text: 'Last name', value: 'lastname' }
      ]
    }
  },
  computed: {
    items () {
      let items = []
      for (var i = 0; i < 100; i++) {
        items.push({
          username: Math.random().toString(36).replace(/[^a-z]+/g, ''),
          firstname: Math.random().toString(36).replace(/[^a-z]+/g, ''),
          lastname: Math.random().toString(36).replace(/[^a-z]+/g, '')
        })
      }
      return items
    }
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.StudentsOverviewToolbarTitle)
  }
}
</script>
