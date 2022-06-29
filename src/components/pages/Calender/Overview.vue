<template>
  <ApiTable collection="calender"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'CalenderOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.CalenderOverviewToolbarTitle)
  }
}
</script>
