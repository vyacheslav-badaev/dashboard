<template>
  <v-flex xs12 sm8 md8 lg6 xl6>
    <ApiForm collection="students" :_new="this.$router.history.current.path.includes('new')"/>
  </v-flex>
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
