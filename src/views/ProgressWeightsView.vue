<template>
  <main class="w-100">
    <section class="features">
      <div class="container">
        <div  class="row" style=" margin-top: 2%;">
          <div class="col-sm-6 col-md-3" v-for="item in result" :key="item.id">
            <figure>
              <div class="d-flex justify-content-center">
                <div class="card">
                  <div class="card-header">
                    <h3>Date: {{item.date}}</h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>Weight :</label>
                          <span><br/>{{item.value}}</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div class="col-sm-6 offset-sm-3">
          <figure>
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h5><span>Last Week</span></h5>
                </div>
                <div class="card-body" style="background-color: #e3e7e6;">
                  <BarChart style="width: 350px; height: 200px;"/>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BarChart from '../components/BarChart'

export default {
  name: 'progressWeightsView',
  components: { BarChart },
  data () {
    return {
      result: [
        { id: 0, date: '10.12.1997', value: 60 },
        { id: 1, date: '10.12.1997', value: 61 },
        { id: 2, date: '10.12.1997', value: 62 },
        { id: 3, date: '10.12.1997', value: 62 },
        { id: 4, date: '10.12.1997', value: 63 },
        { id: 5, date: '10.12.1997', value: 64 },
        { id: 6, date: '10.12.1997', value: 65 },
        { id: 7, date: '10.12.1997', value: 66 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
