<script>
import { Bar } from 'vue-chartjs/src/BaseCharts'

const myArrayDay = []
for (let i = 1; i <= 30; i++) {
  myArrayDay.push(i)
}

const myArrayData = []
for (let i = 1; i <= 30; i++) {
  myArrayData.push(2500 + Math.floor(Math.random() * 15) * 50)
}

export default {
  mixins: [Bar],
  props: {
    daysArray: Array,
    valuesArray: Array
  },
  mounted () {
    // this.logAll()
    this.renderChart({
      labels: this.daysArray,
      datasets: [{
        yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0, max: 100 } }],
        data: this.valuesArray,
        backgroundColor:
          '#000000',
        borderColor: '#60e64e',
        borderWidth: 1,
        hoverBackgroundColor: '#f4a840'
      }]
    }, {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    })
  },
  methods: {
    logAll () {
      console.log(this.daysArray)
      console.log(this.valuesArray)
    }
  }
}
</script>

<style>
</style>
