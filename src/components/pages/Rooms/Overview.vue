<template>
  <ApiTable collection="rooms"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'RoomsOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.RoomsOverviewToolbarTitle)
  }
}
</script>
