<template>
  <div class="myBox">
    <div class="myBox-header">
      <h3>{{ nameOfData }}: </h3>
    </div>
    <div class="myBox-body">
      <perfect-scrollbar>
      <form v-for="item in data" :key="item.id">
        <div class="form-row">
          <div class="col-md-8 offset-md-2">
            <label>{{ item.date }} :</label>
            <span>{{ item.value}}</span>
          </div>
        </div>
        <hr/>
      </form>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  name: 'DataDivDashboard',
  components: {
    PerfectScrollbar
  },
  props: {
    nameOfData: String,
    data: Array
  }

}
</script>

<style >
  .myBox{
    padding: 10px;
    width: 260px;
    height: 600px;
    border-radius: 25px;
    font-weight: bolder;
    color: black;
    margin-bottom: auto;
    background-color: white;
    text-align: center;
  }

  .ps{
    height: 500px;
    width:230px
  }
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
