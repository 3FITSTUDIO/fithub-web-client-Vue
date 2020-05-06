<template>
  <div class="myBox">
    <div class="myBox-header">
      <h3>Measurements: </h3>
      <h5> Data: {{data[0].date}}</h5>
    </div>
    <div class="myBox-body">
      <perfect-scrollbar>
        <form>
          <div class="form-row">
            <div class="col-md-8 offset-md-2">
              <label class="left">Bicep: </label>
              <span class="right">{{ data[0].values[0] }}</span>
            </div>
          </div>
          <hr/>
        </form>
        <form>
          <div class="form-row">
            <div class="col-md-8 offset-md-2">
              <label class="left">Stomach: </label>
              <span class="right">70</span>
            </div>
          </div>
          <hr/>
        </form>
<!--        <form>-->
<!--          <div class="form-row">-->
<!--            <div class="col-md-8 offset-md-2">-->
<!--              <label class="left">{{ item.date }}: </label>-->
<!--              <span class="right">{{ item.value}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <hr/>-->
<!--        </form>-->
<!--        <form>-->
<!--          <div class="form-row">-->
<!--            <div class="col-md-8 offset-md-2">-->
<!--              <label class="left">{{ item.date }}: </label>-->
<!--              <span class="right">{{ item.value}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <hr/>-->
<!--        </form>-->
<!--        <form>-->
<!--          <div class="form-row">-->
<!--            <div class="col-md-8 offset-md-2">-->
<!--              <label class="left">{{ item.date }}: </label>-->
<!--              <span class="right">{{ item.value}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <hr/>-->
<!--        </form>-->
<!--        <form>-->
<!--          <div class="form-row">-->
<!--            <div class="col-md-8 offset-md-2">-->
<!--              <label class="left">{{ item.date }}: </label>-->
<!--              <span class="right">{{ item.value}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <hr/>-->
<!--        </form>-->
<!--        <form>-->
<!--          <div class="form-row">-->
<!--            <div class="col-md-8 offset-md-2">-->
<!--              <label class="left">{{ item.date }}: </label>-->
<!--              <span class="right">{{ item.value}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <hr/>-->
<!--        </form>-->
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  name: 'MeasurementDataDiv',
  props: {
    data: Array
  },
  components: {
    PerfectScrollbar
  }
}
</script>

<style scoped>
  .left {
    flaot: left;
  }
  .right {
    float: right;
  }
  .myBox{
    padding: 10px;
    width: 260px;
    height: 600px;
    border-radius: 25px;
    font-weight: bolder;
    color: black;
    margin-bottom: auto;
    background-color: white;
  }

  .ps{
    height: 500px;
    width:230px
  }
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
