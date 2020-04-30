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
                <h3>Date: </h3>
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
        <figure>
          <div class="d-flex justify-content-center">
            <div class="card">
              <div class="card-header">
                <h3>Date: </h3>
              </div>
              <div class="card-body column">
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
        </figure>
      </div>
      <div class="col-sm-6 col-md-3" >
        <figure>
          <div class="d-flex justify-content-center">
            <div class="card">
              <div class="card-header">
                <h3>Date: </h3>
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
        </figure>
      </div>
      <div class="col-sm-6 col-md-3 column">
        <figure>
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div class="card-header">
                <h5>Date: <span id="datetime1"></span></h5>
                <h4>Steps: <span id="steps">5460</span></h4>
              </div>
              <div class="card-body column" >
                <DoughnutChart style="margin: auto; width: 300px; height: 200px;"/>
              </div>
            </div>
          </div>
        </figure>
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
  .column {
    height: 500px;
    width: 400px;
  }

</style>
