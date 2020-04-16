<template>
  <div class="registration" style="margin-top: 2%;">
    <div class="col-md-8 offset-md-2">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h2>Welcome on board!</h2>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <label>First Name</label>
                  <input type="first_name" class="form-control" id="first_name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <label>Last Name</label>
                  <input type="last_name" class="form-control" id="last_name" >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <label>Email</label>
                  <input type="email" class="form-control" id="email" >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <label>Password</label>
                  <input type="password" class="form-control" id="password" >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <label>Confirm Password</label>
                  <input type="password" class="form-control" id="confirm_password" >
                </div>
              </div>
              <input onclick="location.href='login.html';" value="create new account" class="btn float-center login_btn_registration"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationView'
}
</script >

<style >
</style>
