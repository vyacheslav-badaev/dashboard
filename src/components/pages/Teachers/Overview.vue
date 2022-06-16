<template>
  <ApiTable collection="teachers"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'TeachersOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.TeachersOverviewToolbarTitle)
  }
}
</script>
