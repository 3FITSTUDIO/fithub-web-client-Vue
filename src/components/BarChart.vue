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
    this.renderChart({
      labels: this.daysArray,
      datasets: [{
        minBarLength: 20,
        data: this.valuesArray,
        backgroundColor:
          '#000000',
        borderColor: '#3f9380',
        borderWidth: 1,
        hoverBackgroundColor: '#3f9380'
      }]
    }, {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
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
