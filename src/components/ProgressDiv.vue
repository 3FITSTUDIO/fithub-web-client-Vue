<template>
  <main class="w-100">
    <section class="features">
      <div class="container">
        <header v-if="lastEightRecords.length === 0" style="margin: 2%;">
          <h1>{{typeOfData}}: no input data :(</h1>
        </header>
        <div  class="row" style=" margin-top: 2%;">
          <div class="col-sm-6 col-md-3" v-for="item in lastEightRecords" :key="item.id">
            <figure>
              <div class="d-flex justify-content-center">
                <div class="card">
                  <div class="card-header min-height">
                    <h3>Date: <p>{{item.date}}</p></h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-8 offset-md-2 d-inline-block">
                          <label>{{typeOfData}} :</label>
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
        <div class="form-row">
          <div class="col-lg-6">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h4>Last 7 Records</h4>
                    <span>{{labelDescription}}</span>
                  </div>
                  <div class="card-body" style="background-color: #e3e7e6;">
                    <BarChart
                      v-if="lastSevenDaysDates.length !== 0"
                      :values-array="[...lastSevenDaysValues]"
                      :days-array="[...lastSevenDaysDates]"
                      style="width: 350px; height: 200px;"/>
                    <span v-else>Too small data :( </span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-lg-6">
            <figure>
              <div class="d-flex justify-content-center h-100">
                <div class="card">
                  <div class="card-header">
                    <h4>Last 30 Records</h4>
                    <span>{{labelDescription}}</span>
                  </div>
                  <div class="card-body" style="background-color: #e3e7e6;">
                    <BarChart
                      v-if="last30DaysDates.length !== 0"
                      :values-array="[...last30DaysValues]"
                      :days-array="[...last30DaysDates]"
                      style="width: 350px; height: 200px;"/>
                    <span v-else>Too small data :( </span>
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
import BarChart from './BarChart'

export default {
  name: 'progressDiv',
  components: { BarChart },
  data () {
    return {
      lastSevenDaysValues: [],
      lastSevenDaysDates: [],
      last30DaysValues: [],
      last30DaysDates: []
    }
  },
  props: {
    arrayData: Array,
    typeOfData: String,
    labelDescription: String
  },
  computed: {
    lastEightRecords: function () {
      const length = (this.arrayData.length >= 8) ? 8 : this.arrayData.length
      if (length !== 0) {
        return this.arrayData.slice(0, length).map(item => {
          return {
            id: item.id,
            date: item.date,
            value: item.value
          }
        })
      } else return []
    }
  },
  methods: {
    checkIfAtLeastXRecords (x) {
      const length = this.arrayData.length
      if (length >= x) {
        if (x === 7) { // enough
          this.arrayData.slice(0, x).map(item => {
            this.lastSevenDaysDates.push(item.date)
            this.lastSevenDaysValues.push(item.value)
          })
        } else {
          this.arrayData.slice(0, x).map(item => {
            this.last30DaysDates.push(item.date)
            this.last30DaysValues.push(item.value)
          })
        }
      } else if (length > 0) { // less than wanted but at least 1
        if (x === 7) {
          this.arrayData.slice(0, length).map(item => {
            this.lastSevenDaysDates.push(item.date)
            this.lastSevenDaysValues.push(item.value)
          })
        } else if (length > 7) { // 7-30
          this.arrayData.slice(0, length).map(item => {
            this.last30DaysDates.push(item.date)
            this.last30DaysValues.push(item.value)
          })
        }
      }
    }
  },
  mounted () {
    this.checkIfAtLeastXRecords(7)
    this.checkIfAtLeastXRecords(30)
  }
}
</script>

<style scoped>
  .card {
    min-height: 225px;
  }
  .min-height {
    min-height: 105px;
  }
  .card-body {
    padding: 5px;
    font-size: 20px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

</style>
