<template>
  <ApiForm collection="calender"/>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'CalenderOverview',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$router.history.current.params.id + ' Calender Event Details')
  }
}
</script>
