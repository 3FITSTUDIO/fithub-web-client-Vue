<template>
  <section class="features">
    <div class="container">
      <header style="margin-top: 5%; margin-bottom: 2%;">
        <h1>Welcome in FitHUB!</h1>
        <h3>It's a pleasure to present to you our APP.</h3>
      </header>
      <div class="row">
        <div class="col-sm-12">
          <figure>
            <div class="d-flex justify-content-center h-100">
              <div class="card" style="width: 700px;">
                <div class="card-header">
                  <h5>Date: <span id="datetime1"></span></h5>
                  <h4>Steps: <span id="steps">5460</span></h4>
                </div>
                <div class="card-body">
                  <DoughnutChart/>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div class="col-md-12 col-lg-4 offset-lg-2">
          <figure>
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h4>Date: <span id="datetime2"></span></h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-8 offset-md-2 d-inline-block">
                        <h4><label>Weight :</label>
                          <span id="weight"><br/>75 kg</span></h4>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div class="col-md-12 col-lg-4">
          <figure>
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h4>Date: <span id="datetime3"></span></h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-8 offset-md-2 d-inline-block">
                        <h4><label>Calories :</label>
                          <span id="calories"><br/>3570 kcal</span></h4>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart'
export default {
  name: 'DashboardView',
  components: { DoughnutChart }
}
</script>

<style scoped>

</style>
