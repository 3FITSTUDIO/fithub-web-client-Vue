<template>
  <main class="w-100">
    <section class="features">
      <div class="container">
        <div class="row" style=" margin-top: 2%;" >
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_1">21.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_1"><br/>3570 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_2">20.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_2"><br/>3370 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_3">19.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_3"><br/>3170 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_4">18.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_4"><br/>3570 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_5">17.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_5"><br/>2950 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_6">16.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_6"><br/>2850 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_7">15.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_7"><br/>3520 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 col-md-3">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: <span id="datetime_8">14.01.2020</span></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Calories :</label>
                          <span id="calories_8"><br/>2850 kcal</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-sm-6 offset-sm-3">
            <figure>
              <div class="d-flex justify-content-center h-100" >
                <div class="card" style="width: 700px;">
                  <div class="card-header">
                    <h5><span>Last Week</span></h5>
                  </div>
                  <div class="card-body" style="background-color: #e3e7e6;">
                    <canvas id="barChart"></canvas>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'progoressCalories'
}
</script>

<style scoped>

</style>
