<template>
  <ApiTable collection="roomscalender"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'RoomsCalenderOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.RoomsCalenderOverviewToolbarTitle)
  }
}
</script>
