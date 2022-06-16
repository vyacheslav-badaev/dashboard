<template>
  <ApiForm collection="servicedesk"/>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'ServicedeskDetails',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$router.history.current.params.id + ' Servicedesk Employee Details')
  }
}
</script>
