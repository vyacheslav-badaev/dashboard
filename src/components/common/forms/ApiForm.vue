<template>
  <v-card>
    <v-card-title>
      <span class="headline" v-if="loading">Loading data</span>
      <span class="headline" v-else-if="item && item[key]">{{collection.charAt(0).toUpperCase() + collection.slice(1) + ' ' + item[key]}}</span>
      <span class="headline" v-else>Create new {{collection.charAt(0).toUpperCase() + collection.slice(1)}}</span>
    </v-card-title>
    <v-card-text v-if="!loading">
      <v-container grid-list-md>
        <v-layout wrap v-for="column in columns" v-bind:key="column.text" ref="fields">
          <v-flex xs12 sm4>
            <v-subheader class="text-sm-left">{{column.text}}</v-subheader>
          </v-flex>
          <v-flex xs12 sm8>
            <v-date-picker
              v-if="editing && !column.readOnly && column.type && column.type === 'date'"
              v-model="item[column.value]"
              :value="item && item[key] ? item[column.value] : ''"
              class="mt-3"/>
            <v-time-picker
              v-if="editing && !column.readOnly && column.type && column.type === 'time'"
              v-model="item[column.value]"
              :value="item && item[key] ? item[column.value] : ''"
              class="mt-3"/>
            <v-text-field
              v-else-if="editing && !column.readOnly"
              v-model="item[column.value]"
              :label="column.text"
              :value="item && item[key] ? item[column.value] : ''"/>
            <v-subheader v-else-if="item" class="text-sm-right">{{item[column.value]}}</v-subheader>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import Moment from 'moment'
export default {
  data () {
    return {
      id: this._id || this.$router.history.current.params.id,
      new: this._new || false,
      loading: false,
      editing: null,
      key: this.$store.state[this.collection].primaryKey,
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
          id: this._uid + this.collection + 'DeleteButton',
          title: 'Delete ' + this.collection,
          color: 'red',
          flat: true,
          action: this.onDeleteButtonClick
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
      ],
      defaultDate: new Moment().format('YYYY-MM-DD')
    }
  },
  computed: {
    item () {
      let item = this.$store.state[this.collection].items.find(_item => String(_item[this.key]) === String(this.id))
      if (item) {
        if (item.hasOwnProperty('readOnly') && item.readOnly) {
          this.resetButtons()
        }
        return item
      } else {
        item = {}
        if (this.columns.find((column) => (column.type && column.type === 'date'))) {
          item[this.columns.find((column) => (column.type && column.type === 'date')).value] = this.defaultDate
        }
        return item
      }
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
      this.$store.dispatch(this.collection + '/find', {id: this.id})
        .catch((error) => {
          this.$store.dispatch('ui/setSnackbarMessage', error.message)
        })
        .finally(() => {
          if (!this.item || (this.item && !this.item[this.key])) {
            this.$router.push({name: this.collection.charAt(0).toUpperCase() + this.collection.slice(1) + 'Create'})
          }
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
      if (this.new) {
        this.$store.dispatch(this.collection + '/create', this.item)
          .then((id) => {
            this.$router.push({name: this.collection.charAt(0).toUpperCase() + this.collection.slice(1) + 'Details', params: {id}})
          })
          .catch((error) => {
            this.$store.dispatch('ui/setSnackbarMessage', error.message)
          })
      } else {
        this.$store.dispatch(this.collection + '/update', this.item)
          .then(() => {
            this.editing = false
            this.refresh()
          })
          .catch((error) => {
            this.$store.dispatch('ui/setSnackbarMessage', error.message)
          })
      }
    },
    onDeleteButtonClick () {
      this.$store.dispatch(this.collection + '/delete', this.item[this.key])
        .then(() => {
          this.$router.push({name: this.collection.charAt(0).toUpperCase() + this.collection.slice(1) + 'Overview'})
        })
        .catch((error) => {
          this.$store.dispatch('ui/setSnackbarMessage', error.message)
        })
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
