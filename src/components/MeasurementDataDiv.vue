<template>
  <div class="myBox">
    <div class="myBox-header">
      <h3 style="text-align: center">Measurements: </h3>
      <hr/>
    </div>
    <div class="myBox-body">
      <div v-if="data.length === 0" style="text-align: center;">
        <span style="font-weight: bold;">No input data :(</span>
      </div>
      <span v-else>
        <h5 style="text-align: center"> Data: {{data[0].date}}</h5>
        <perfect-scrollbar>
          <form>
            <div class="form-row">
              <div class="col-md-8 offset-md-2">
                <label class="left">Neck: </label>
                <span class="right">
                  {{ data[0].values[0] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[0]"/>
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
                  {{ data[0].values[1] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[1]"/>
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
                  {{ data[0].values[2] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[2]"/>
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
                  {{ data[0].values[3] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[3]"/>
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
                  {{ data[0].values[4] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[4]"/>
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
                  {{ data[0].values[5] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[5]"/>
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
                  {{ data[0].values[6] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[6]"/>
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
                  {{ data[0].values[7] }}
                  <MeasurementDifferenceDiv :value="measureMentsDifferece[7]"/>
                </span>
              </div>
            </div>
            <hr/>
          </form>
        </perfect-scrollbar>
      </span>
    </div>
  </div>
</template>

<script>
import MeasurementDifferenceDiv from './MeasurementDifferenceDiv'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  name: 'MeasurementDataDiv',
  props: {
    data: Array
  },
  components: {
    PerfectScrollbar,
    MeasurementDifferenceDiv
  },
  computed: {
    measureMentsDifferece: function () {
      const diffArray = []
      if (this.data.length > 1) {
        for (let i = 0; i < this.data.length; i++) {
          const item = this.data[0].values[i] - this.data[1].values[i]
          diffArray.push(item)
        }
        return diffArray
      } else return [].fill(0, 0, 7)
    }
  },
  methods: {
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
    height: 600px;
    border-radius: 25px;
    font-weight: bold;
    color: black;
    margin-bottom: auto;
    /*background-color: white;*/
  }

  .ps{
    height: 480px;
    width:230px
  }
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
