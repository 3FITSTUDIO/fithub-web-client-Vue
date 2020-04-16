<template>
  <section class="features">
    <div class="container">
      <div class="col-md-8 offset-md-2" style="margin-top: 15%">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h1>Date: <span id="datetime"></span></h1>
            </div>
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-8 offset-md-2">
                    <label>Calories</label>
                    <input data-bind="value: amount" type="text" class="form-control" id="calories">
                  </div>
                </div>
                <button type="submit" class="btn float-center login_btn_registration">Add calories</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddCaloriesView'
}
</script>

<style scoped>
  .card-body{
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .card-header {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

</style>
