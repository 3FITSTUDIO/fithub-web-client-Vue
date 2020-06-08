<script>
import { Doughnut } from 'vue-chartjs/src/BaseCharts'

export default {
  mixins: [Doughnut],
  date () {
    return {
      labelLeft: '',
      labelDone: ''
    }
  },
  props: {
    height: {
      default: 210
    },
    maxValue: Number,
    userValue: Number
  },
  mounted () {
    this.renderChart({
      labels: [this.labelDone, this.labelLeft],
      datasets: [{
        label: { display: false },
        data: [this.userValue, this.preventNegativeValue],
        backgroundColor: ['#3f9380', '#dce0dc'],
        borderColor: ['#3f9380', '#dce0dc'],
        hoverBackgroundColor: ['#3f9380', '#ffffff']
      }]
    }, {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      height: 200
    })
    // this.logValues()
  },
  computed: {
    preventNegativeValue: function () {
      const difference = this.maxValue - this.userValue
      return (difference < 0) ? 0 : difference
    },
    labelLeft: function () {
      return (this.maxValue === 8) ? 'Hours of sleep left' : 'Steps left'
    },
    labelDone: function () {
      return (this.maxValue === 8) ? 'Hours slept' : 'Steps made'
    }
  },
  methods: {
    logValues () {
      // console.log(this.maxValue)
      // console.log(this.userValue)
    }
  }
}
</script>

<style scoped>
</style>
