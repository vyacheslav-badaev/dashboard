<template>
  <v-card>
    <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{collection.charAt(0).toUpperCase() + collection.slice(1)}} {{keyValue}}</h3>
      <div>A line chart distribution of {{keyValue}} from {{collection}}</div>
    </div>
  </v-card-title>
    <v-card-text v-if="error">
      {{ error }}
    </v-card-text>
  <v-card-text v-else>
    <LineChart :chartData="data" :options="options"/>
  </v-card-text>
  </v-card>
</template>
<script>
import LineChart from '../../charts/LineChart'
import moment from 'moment'
export default {
  name: 'ApiLineChart',
  components: {
    LineChart
  },
  data () {
    return {
      labels: [],
      occurrence: [],
      options: {responsive: true, maintainAspectRatio: false, legend: {display: false}},
      loading: false,
      error: false,
      columns: this.$store.state[this.collection].columns
    }
  },
  computed: {
    items () {
      return this.$store.state[this.collection].items
    },
    data () {
      return {
        labels: this.labels,
        datasets: [
          {
            data: this.occurrence
          }
        ]
      }
    }
  },
  watch: {
    items () {
      this.update()
    }
  },
  props: {
    collection: {
      type: String,
      required: true
    },
    keyValue: {
      type: String,
      required: true
    }
  },
  methods: {
    refresh () {
      this.loading = true
      this.error = false
      this.$store.dispatch(this.collection + '/findBy', {})
        .then(() => {
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          this.error = error.message
          this.$store.dispatch('ui/setSnackbarMessage', error.message)
        })
    },
    update () {
      this.labels = []
      this.occurrence = []
      for (let item of this.items) {
        let value = String(item[this.keyValue]).trim().toLowerCase() || 'empty'
        if (moment(value).isValid()) {
          value = moment(value).format('l')
        }
        if (this.labels.indexOf(value) === -1) {
          this.labels.push(value)
        }
        if (typeof this.occurrence[this.labels.indexOf(value)] === 'undefined') {
          this.occurrence[this.labels.indexOf(value)] = 0
        }
        this.occurrence[this.labels.indexOf(value)]++
      }
    }
  },
  created () {
    if (this.items.length === 0) {
      this.refresh()
    } else {
      this.update()
    }
  }
}
</script>
