<template>
  <div class="container">
    <header style="margin: 2%;">
      <div>
        <welcome-name-div/>
        <notifications-button/>
      </div>
    </header>
    <div class="row" style="margin-bottom: 3%;">
      <div class="col-sm-6 col-md-3" v-if="caloriesDataLoaded">
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...caloriesData]" :name-of-data="caloriesTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3" v-if="weightsDataLoaded">
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...weightsData]" :name-of-data="weightTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-flex justify-content-center">
          <div class="myBox">
            <div class="myBox-header">
              <h3>Steps & sleep</h3>
              <hr/>
            </div>
            <div class="myBox-body" v-if="sleepDataLoaded && stepsDataLoaded">
              <h5> Steps:
                <span v-if="stepsData.length !== 0"> {{stepsData[0].date}}</span>
                <p v-else> No input data :(</p>
              </h5>
              <DoughnutChart v-if="stepsData.length !== 0" :max-value="7000" :user-value="stepsData[0].value"/>
              <h5> Sleep:
                <span v-if="sleepData.length !== 0">({{sleepData[0].date}})</span>
                <p v-else>No input data :(</p>
              </h5>
              <DoughnutChart v-if="sleepData.length !== 0" :max-value="8" :user-value="sleepData[0].value"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-3" v-if="measurementsDataLoaded">
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
import NotificationsButton from '../components/NotificationsButton'
import WelcomeNameDiv from '../components/WelcomeNameDiv'

export default {
  name: 'DashboardView',
  data () {
    return {
      caloriesTitle: 'Calories',
      weightTitle: 'Weights'
    }
  },
  components: {
    WelcomeNameDiv,
    NotificationsButton,
    MeasurementDataDiv,
    DoughnutChart,
    DataDivDashboard
  },
  mounted () {
    this.getMeasurementsData()
    this.getCaloriesData()
    this.getWeightsData()
    this.getSleepData()
    this.getStepsData()
    this.getTrainingsData()
    this.getNotificationsData()
  },
  methods: {
    getSleepData () {
      this.$store.dispatch('getArrayData', { path: 'sleep' })
    },
    getStepsData () {
      this.$store.dispatch('getArrayData', { path: 'steps' })
    },
    getCaloriesData () {
      this.$store.dispatch('getArrayData', { path: 'calories' })
    },
    getWeightsData () {
      this.$store.dispatch('getArrayData', { path: 'weights' })
    },
    getMeasurementsData () {
      this.$store.dispatch('getArrayData', { path: 'measurements' })
    },
    getTrainingsData () {
      this.$store.dispatch('getArrayData', { path: 'trainings' })
    },
    getNotificationsData () {
      this.$store.dispatch('getArrayData', { path: 'notifications' })
    }
  },
  computed: mapState({
    caloriesDataLoaded: state => state.caloriesData,
    weightsDataLoaded: state => state.weightsDataLoaded,
    stepsDataLoaded: state => state.stepsDataLoaded,
    sleepDataLoaded: state => state.sleepDataLoaded,
    measurementsDataLoaded: state => state.caloriesDataLoaded,
    notificationsDataLoaded: state => state.notificationsDataLoaded,
    caloriesData: state => state.caloriesData,
    weightsData: state => state.weightsData,
    sleepData: state => state.sleepData,
    stepsData: state => state.stepsData,
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
