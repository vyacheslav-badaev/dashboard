<template>
  <v-flex xs12 sm8 md8 lg6>
    <ApiForm collection="rooms" :_new="this.$router.history.current.path.includes('new')" :user-can-edit="userCanEdit"/>
  </v-flex>
</template>
<script>
import ApiForm from '../../common/forms/ApiForm'
export default {
  name: 'RoomDetails',
  data () {
    return {
      userCanEdit: this.$store.getters['auth/canEdit']('rooms')
    }
  },
  components: {
    ApiForm
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', (this.$router.history.current.params.id ? this.$router.history.current.params.id : 'New') + ' Room Details')
  }
}
</script>
