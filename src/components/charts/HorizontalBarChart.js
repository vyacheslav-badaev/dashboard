import {HorizontalBar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
