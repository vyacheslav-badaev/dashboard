<template>
  <ApiTable collection="calendar"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'CalendarOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.CalendarOverviewToolbarTitle)
  }
}
</script>
