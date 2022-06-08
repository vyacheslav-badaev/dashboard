<template>
  <ApiTable module="students"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'StudentsOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.StudentsOverviewToolbarTitle)
  }
}
</script>
