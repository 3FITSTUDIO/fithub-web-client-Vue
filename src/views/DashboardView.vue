<template>
  <div class="container">
    <header style="margin-bottom: 2%;">
      <h1>{{this.$store.state.username}}, welcome in FitHUB!</h1>
    </header>
    <div class="row">
      <div class="col-sm-6 col-md-3" >
          <div class="d-flex justify-content-center">
            <div class="card">
              <div class="card-header">
                <h3>Calories: </h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-8 offset-md-2 d-inline-block">
                      <label>Calories :</label>
                      <span><br/></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
      <div class="col-sm-6 col-md-3" >
        <div class="d-flex justify-content-center">
          <div class="card">
            <div class="card-header">
              <h3>Weights: </h3>
            </div>
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-8 offset-md-2 d-inline-block">
                    <label>Calories :</label>
                    <span><br/></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
export default {
  name: 'DashboardView',
  components: { DoughnutChart }
}
</script>

<style scoped>
  .row {
    width: 100%;
  }
  .container {
    width: 100%;
  }

</style>
