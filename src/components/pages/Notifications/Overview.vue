<template>
  <ApiTable collection="notifications"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'NotificationsOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.NotificationsOverviewToolbarTitle)
  }
}
</script>
