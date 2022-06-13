<template>
  <ApiTable module="servicedesk"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'ServicedeskOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.ServicedeskOverviewToolbarTitle)
  }
}
</script>
