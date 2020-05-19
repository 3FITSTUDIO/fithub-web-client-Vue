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
                <input v-model="login" type="text" id="inputUsername" class="form-control" placeholder="email or login">
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="password">
              </div>
              <input v-on:click="logIn" value="Sign In" class="btn float-right login_btn"/>
              <p class="accessDenied green" v-if="this.$store.state.userCreated">User created!</p>
              <p class="accessDenied" v-if="this.$store.state.accessDenied">Login or password invalid</p>
              <p class="accessDenied" v-if="this.$store.state.serverError">Server error</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sha256 } from 'js-sha256'

export default {
  name: 'LoginView',
  data () {
    return {
      login: '',
      password: '',
      user: []
    }
  },
  computed: mapState({
    isRegistrationViewUp: state => state.isRegistrationViewUp
  }),
  methods: {
    logIn () {
      this.$store.state.userCreated = false
      this.$store.state.accessDenied = false
      this.$store.state.serverError = false
      if (this.login === '' || this.password === '') {
        this.$store.state.accessDenied = true
      } else {
        this.$store.dispatch('signIn', {
          login: this.login,
          password: sha256(this.password) // TODO zahashowane
        })
      }
    }
  }

}
</script>

<style scoped>
  .login_btn {
    color: whitesmoke;
    background-color: #3f9380;
    width: 150px;}
  .login_btn:hover {
    color: black;
    background-color: #96d1a6;
  }
  .accessDenied {
    text-align: left;
    color: red;
    font-size: 15px;
  }
  .green {
    color: green;
  }
</style>
