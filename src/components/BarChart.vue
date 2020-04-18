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
  mounted () {
    this.renderChart({
      labels: myArrayDay,
      datasets: [{
        data: myArrayData,
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
  }
}
</script>

<style>
</style>
