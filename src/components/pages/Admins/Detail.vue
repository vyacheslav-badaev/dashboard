<template>
  <ApiForm module="admins"/>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'AdminDetails',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$router.history.current.params.id + ' Admin Details')
  }
}
</script>
