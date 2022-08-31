<template>
  <ApiTable collection="rooms" :user-can-create="userCanCreate"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'RoomsOverview',
  data () {
    return {
      userCanCreate: this.$store.getters['auth/canCreate']('rooms')
    }
  },
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.RoomsOverviewToolbarTitle)
  }
}
</script>
