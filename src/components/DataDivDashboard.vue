<template>
  <div class="myBox">
    <div class="myBox-header">
      <h3>{{ nameOfData }}: </h3>
    </div>
    <div class="myBox-body ps">
      <form v-for="item in data" :key="item.id">
        <div class="form-row">
          <div class="col-md-8 offset-md-2">
            <label>{{ item.date }} :</label>
            <span>{{ item.value}}</span>
          </div>
        </div>
        <hr/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataDivDashboard',
  props: {
    nameOfData: String,
    data: Array
  }
  // mounted () {
  //   this.consoleLog()
  // },
  // methods: {
  //   consoleLog () {
  //     console.log(this.props.nameOfData, this.props.data)
  //   }
  // }
}
</script>

<style >
  .myBox{
    padding: 10px;
    width:200px;
    height: 600px;
    border-radius: 25px;
    font-weight: bolder;
    color: black;
    margin-bottom: auto;
    background-color: white;
    text-align: center;
  }

</style>
