<template>
  <v-flex xs12 sm8 md8 lg6>
    <ApiForm collection="notifications" :_new="this.$router.history.current.path.includes('new')"/>
  </v-flex>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'NotificationDetails',
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', (this.$router.history.current.params.id ? this.$router.history.current.params.id : 'New') + ' Notification Details')
  }
}
</script>
