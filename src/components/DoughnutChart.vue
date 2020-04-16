<template>
  <div>
    <chartjs-doughnut v-bind:type="type"
                      v-bind:labels="labels"
                    v-bind:datasets="datasets"
                    v-bind:option="option">
    </chartjs-doughnut>
    <h1>SIEMA TY</h1>
  </div>
</template>

<script>
// import { D } from 'vue-chartjs'
// export default {
//   extends: Doughnut,
//   name: 'DoughnutChart',
//   data () {
//     return {
//       type: 'doughnut',
//       labels: ['steps made', 'steps left'],
//       datasets: [{
//         // label: ,
//         data: [5460, (7000 - 5460)],
//         backgroundColor: ['#2EF429', '#FCEBCC'],
//         borderColor: ['#2EF429', '#FCEBCC'],
//         hoverBackgroundColor: ['#2EF429', '#D9BA8C']
//       }],
//       option: {
//         labels: {
//           display: false
//         },
//         legend: {
//           display: false
//         },
//         responsive: true
//       }
//     }
//   }
// }

import { Doughnut } from 'vue-chartjs/src/BaseCharts'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['steps made', 'steps left'],
      datasets: [{
        label: { display: false },
        data: [5460, (7000 - 5460)],
        backgroundColor: ['#2EF429', '#FCEBCC'],
        borderColor: ['#2EF429', '#FCEBCC'],
        hoverBackgroundColor: ['#2EF429', '#D9BA8C']
      }],
      option: {
        labels: {
          display: false
        }
      }
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped>

</style>
