<template>
  <v-layout row wrap>
    <v-flex d-flex xs2>
      <v-card>
        <LineChart :chart-data="datacollection"></LineChart>
      </v-card>
    </v-flex>
    <v-flex d-flex xs4>
      <v-card>
        <LineChart :chart-data="datacollection"></LineChart>
      </v-card>
    </v-flex>
    <v-flex d-flex xs2>
      <v-card>
        <LineChart :chart-data="datacollection"></LineChart>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import LineChart from './charts/LineChart.js'
export default {
  name: 'Demo',
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.DemoToolbarTitle)
  }
}
</script>
