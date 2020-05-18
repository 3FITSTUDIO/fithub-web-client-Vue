<template>
  <main class="w-100">
    <section class="features">
      <div class="container">
        <header v-if="lastFourMeasurementsData.length === 0" style="margin: 2%;">
          <h1>No Input data :(</h1>
        </header>
        <div class="row" style=" margin-top: 2%;" >
          <div v-for="item in lastFourMeasurementsData" :key="item.id" class="col-sm-6 col-md-3">
            <div class="d-flex justify-content-center h-100">
              <div class="myBox">
                <div class="myBox-header">
                  <h3 style="text-align: center">Measurements: </h3>
                  <hr/>
                </div>
                <div class="card-body">
                  <h5 style="text-align: center"> Data: {{item.date}}</h5>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Neck: </label>
                        <span class="right">
                          {{ item.values[0] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Chest: </label>
                        <span class="right">
                          {{ item.values[1] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Bicep: </label>
                        <span class="right">
                          {{ item.values[2] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Forearm: </label>
                        <span class="right">
                          {{ item.values[3] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2" style="text-align: left">
                        <label class="left">Stomach:</label>
                        <span class="right">
                          {{ item.values[4] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Waist: </label>
                        <span class="right">
                          {{ item.values[5] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2" style="text-align: left">
                        <span>Thigh: </span>
                        <span class="right">
                          {{ item.values[6] }}
                        </span>
                      </div>
                    </div>
                    <hr/>
                  </form>
                  <form>
                    <div class="form-row">
                      <div class="col-md-8 offset-md-2">
                        <label class="left">Calf: </label>
                        <span class="right">
                          {{ item.values[7] }}
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'progressMeasurementsView',
  computed: {
    measurementsData: function () {
      return this.$store.state.measurementsData
    },
    lastFourMeasurementsData: function () {
      const length = (this.measurementsData.length >= 4) ? 4 : this.measurementsData.length
      if (length !== 0) {
        return this.measurementsData.slice(0, length)
      } else return []
    }
  }
}
</script>

<style scoped>
  .left {
    float: left;
  }
  .right {
    float: right;
  }

  .myBox{
    text-align: left;
    /*padding: 10px;*/
    /*width: 260px;*/
    height: auto;
    border-radius: 25px;
    font-weight: bold;
    color: black;
    margin-bottom: auto;
    /*background-color: white;*/
  }

</style>
