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
                    <label>Weight</label>
                    <input data-bind="value: amount" type="weight" class="form-control" id="weight">
                  </div>
                </div>
                <button type="submit" class="btn float-center login_btn_registration">Add weight</button>
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
  name: 'addWeightView'
}
</script>

<style scoped>

</style>
