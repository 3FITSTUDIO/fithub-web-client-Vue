<template>
  <div class="container">
    <header style="margin: 2%;">
      <h1>{{this.$store.state.username}}, welcome in FitHUB!</h1>
    </header>
    <div class="row">
      <div class="col-sm-6 col-md-3" >
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...caloriesData]" :name-of-data="caloriesTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3" >
        <div class="d-flex justify-content-center">
          <DataDivDashboard :data="[...caloriesData]" :name-of-data="weightTitle"/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3" >
        <h1>charts</h1>
        <DoughnutChart/>
        <DoughnutChart/>
      </div>
      <div class="col-sm-6 col-md-3" >
        <div class="d-flex justify-content-center">
          <div class="card">
            <div class="card-header">
              <h3>Measurments: </h3>
            </div>
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-8 offset-md-2 d-inline-block">
                    <label>Calories :  </label>
                    <span>  500</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart'
import DataDivDashboard from '../components/DataDivDashboard'
import { mapState } from 'vuex'

export default {
  name: 'DashboardView',
  data () {
    return {
      caloriesTitle: 'Calories',
      weightTitle: 'Weights'
    }
  },
  components: { DoughnutChart, DataDivDashboard },
  mounted () {
    this.getCaloriesData()
  },
  methods: {
    getCaloriesData () {
      this.$store.dispatch('getArrayData', { path: 'calories' })
      console.log(this.$store.state.caloriesData[0].id)
    }
  },
  computed: mapState({
    caloriesData: state => state.caloriesData,
    weightData: state => state.weightData
  })
}
</script>

<style scoped>
</style>
