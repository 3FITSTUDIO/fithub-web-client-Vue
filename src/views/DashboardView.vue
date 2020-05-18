<template>
  <div class="container">
    <header style="margin: 2%;">
      <h1>{{this.$store.state.username}}, welcome in FitHUB!</h1>
    </header>
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...caloriesData]" :name-of-data="caloriesTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...weightsData]" :name-of-data="weightTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-flex justify-content-center">
          <div class="myBox">
            <div class="myBox-header">
              <h3>Data : xx-xx-xx </h3>
              <hr/>
            </div>
            <div class="myBox-body">
              <h3>Steps</h3>
              <DoughnutChart/>
              <h3>Sleep</h3>
              <DoughnutChart/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-flex justify-content-center">
          <measurement-data-div :data="[...measurementsData]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart'
import DataDivDashboard from '../components/DataDivDashboard'
import { mapState } from 'vuex'
import MeasurementDataDiv from '../components/MeasurementDataDiv'
import { sha256 } from 'js-sha256'

export default {
  name: 'DashboardView',
  data () {
    return {
      caloriesTitle: 'Calories',
      weightTitle: 'Weights'
    }
  },
  components: {
    MeasurementDataDiv,
    DoughnutChart,
    DataDivDashboard
  },
  mounted () {
    this.getMeasurementsData()
    this.getCaloriesData()
    this.getWeightsData()
  },
  methods: {
    getCaloriesData () {
      this.$store.dispatch('getArrayData', { path: 'calories' })
      // console.log(this.$store.state.caloriesData[0].id)
      console.log(sha256('Message') + ': to hash')
    },
    getWeightsData () {
      this.$store.dispatch('getArrayData', { path: 'weights' })
      // console.log(this.$store.state.caloriesData[0].id)
    },
    getMeasurementsData () {
      this.$store.dispatch('getArrayData', { path: 'measurements' })
      // console.log(this.measurementsData)
    }
  },
  computed: mapState({
    caloriesData: state => state.caloriesData,
    weightsData: state => state.weightsData,
    measurementsData: state => {
      if (state.measurementsData !== []) {
        return state.measurementsData
      } else {
        const array = [{
          date: new Date().getDate(),
          values: [0, 0, 0, 0, 0, 0, 0]
        },
        {
          date: new Date().getDate(),
          values: [0, 0, 0, 0, 0, 0, 0]
        }]
        return array
      }
    }
  })
}
</script>

<style scoped>
  .myBox {
    margin: 10px;
    padding: 10px;
    width: 260px;
    height: 600px;
    border-radius: 25px;
    font-weight: bolder;
    color: black;
    margin-bottom: auto;
    background-color: white;
  }
</style>
