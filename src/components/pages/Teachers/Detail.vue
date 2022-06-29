<template>
  <ApiForm collection="teachers"/>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'TeacherDetails',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$router.history.current.params.id + ' Teacher Details')
  }
}
</script>
