<template>
  <ApiTable module="admins"/>
</template>
<script>
import ApiTable from '../../common/tables/ApiTable'
export default {
  name: 'AdminsOverview',
  components: {
    ApiTable
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.AdminsOverviewToolbarTitle)
  }
}
</script>
