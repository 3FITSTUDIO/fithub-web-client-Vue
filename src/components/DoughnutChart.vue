<script>
import { Doughnut } from 'vue-chartjs/src/BaseCharts'

export default {
  mixins: [Doughnut],
  mounted () {
    this.renderChart({
      labels: ['steps made', 'steps left'],
      datasets: [{
        label: { display: false },
        data: [5460, (7000 - 5460)],
        backgroundColor: ['#2EF429', '#FCEBCC'],
        borderColor: ['#2EF429', '#FCEBCC'],
        hoverBackgroundColor: ['#2EF429', '#D9BA8C']
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

<style scoped>
</style>
