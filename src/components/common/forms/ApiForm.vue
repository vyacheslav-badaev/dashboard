<template>
  <v-card>
    <v-card-title>
      <span class="headline" v-if="loading">Loading data</span>
      <span class="headline" v-else-if="item">{{collection.charAt(0).toUpperCase() + collection.slice(1, -1) + ' ' + item.username}}</span>
      <span class="headline" v-else>Create new {{collection.charAt(0).toUpperCase() + collection.slice(1, -1)}}</span>
    </v-card-title>
    <v-card-text v-if="!loading">
      <v-container grid-list-md>
        <v-layout wrap v-for="column in columns" v-bind:key="column.text">
          <v-flex xs12 sm4>
            <v-subheader class="text-sm-left">{{column.text}}</v-subheader>
          </v-flex>
          <v-flex xs12 sm8>
            <v-text-field v-if="editing" :label="column.text" :value="item ? item[column.value] : ''"></v-text-field>
            <v-subheader v-else-if="item" class="text-sm-right">{{item[column.value]}}</v-subheader>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      id: this._id || this.$router.history.current.params.id,
      new: this._new || false,
      loading: false,
      editing: null,
      columns: this.$store.state[this.collection].columns,
      buttons: [
        {
          id: this._uid + this.collection + 'editButton',
          title: 'Edit ' + this.collection,
          color: 'orange',
          flat: true,
          action: this.onEditButtonClick
        },
        {
          id: this._uid + this.collection + 'cancelButton',
          title: 'Cancel',
          color: 'red',
          flat: true,
          action: this.onCancelButtonClick
        },
        {
          id: this._uid + this.collection + 'saveButton',
          title: 'Save ' + this.collection,
          color: 'green',
          flat: true,
          action: this.onSaveButtonClick
        }
      ]
    }
  },
  computed: {
    item () {
      return this.$store.state[this.collection].items.find(_item => _item.username === this.id)
    }
  },
  props: {
    _id: {
      type: String,
      required: false
    },
    _new: {
      type: Boolean,
      required: false
    },
    collection: {
      type: String,
      required: true
    }
  },
  methods: {
    refresh () {
      this.loading = true
      this.$store.dispatch(this.collection + '/find', this.$router.history.current.params.id)
        .then((response) => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    onEditButtonClick () {
      this.editing = true
    },
    onCancelButtonClick () {
      this.editing = false
    },
    onSaveButtonClick () {
      this.editing = false
    },
    resetButtons () {
      const self = this
      this.buttons.forEach(function (button) {
        self.$store.dispatch('ui/removeToolbarButton', button)
      })
    }
  },
  watch: {
    editing (newValue, oldValue) {
      const self = this
      this.resetButtons()
      if (newValue) {
        if (this.new) {
          this.buttons.filter(button => button.title.includes('Save')).forEach(function (button) {
            self.$store.dispatch('ui/addToolbarButton', button)
          })
        } else {
          this.buttons.filter(button => !button.title.includes('Edit')).forEach(function (button) {
            self.$store.dispatch('ui/addToolbarButton', button)
          })
        }
      } else {
        this.buttons.filter(button => button.title.includes('Edit')).forEach(function (button) {
          self.$store.dispatch('ui/addToolbarButton', button)
        })
      }
    }
  },
  mounted () {
    if (this.new) {
      this.editing = true
    } else {
      this.editing = false
      this.refresh()
    }
  },
  beforeDestroy () {
    this.resetButtons()
  }
}
</script>
