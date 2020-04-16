<template>
  <div class="container" style="margin-top: 2%;">
    <div class="col-md-8 offset-md-2">
      <div class="d-flex justify-content-center h-100">
        <div class="card" id="login">
          <div class="card-header">
            <h3>Nice to see You!</h3>
          </div>
          <div class="card-body " style="margin-top: 5%;">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input data-bind="value: username" type="text" id="inputUsername" class="form-control" placeholder="email or login">
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input data-bind="value: password" type="password" class="form-control" id="inputPassword" placeholder="password">
              </div>
              <input data-bind="click: login" value="Sign In" onclick="location.href='index.html';" class="btn float-right login_btn"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style >
</style>
