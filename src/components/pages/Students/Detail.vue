<template>
  <ApiForm module="students"/>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'StudentDetails',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$router.history.current.params.id + ' Student Details')
  }
}
</script>
