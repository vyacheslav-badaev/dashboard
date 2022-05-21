<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
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
      ],
      items: [
        {
          username: '0123567',
          firstname: 'John',
          lastname: 'Doe'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('setToolbarTitle', this.$store.state.ui.StudentsOverviewToolbarTitle)
  }
}
</script>
