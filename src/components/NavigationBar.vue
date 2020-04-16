<template>
  <nav id="navbar" class="navbar navbar-dark bg-features navbar-expand-lg">
    <a class="navbar-brand" href="#"><img :src="require('../assets/white_logo.png')" width="40" height="30"
                                          class="d-inline-block mr-1 align-bottom" alt="">FITHUB</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
            aria-controls="mainmenu" aria-expanded="false" aria-label="Przełącznik nawigacji">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainmenu">
      <ul class="navbar-nav mr-auto">
        <router-link to="/dashboard">
          <li class="nav-item active">
            <a class="nav-link" > Dashboard </a>
          </li>
        </router-link>
        <li class="nav-item dropdown">
        <b-dropdown text="Progress" class="dropdown-button" variant="success">
          <router-link to="/progressWeights"><a class="dropdown-item" > Weights </a></router-link>
          <router-link to="/progressMeasurments"><a class="dropdown-item" > Measurments </a></router-link>
          <router-link to="/progressCalories"><a class="dropdown-item" > Calories </a></router-link>
        </b-dropdown>
      </li>
        <li class="nav-item dropdown">
          <b-dropdown text="Add" class="dropdown-button" variant="success">
            <router-link to="/addWeight"><a class="dropdown-item" > Weights </a></router-link>
            <router-link to="/addMeasurment"><a class="dropdown-item" > Measurments </a></router-link>
            <router-link to="/addCalories"><a class="dropdown-item" > Calories </a></router-link>
          </b-dropdown>
        </li>
      </ul>
      <div class="form-inline">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"> Account </a>
          </li>
          <li>
            <a>
              <input v-on:click="onButtonClick" type="submit" :value="buttonText" class="btn float-right login_btn mr-2">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationBar',
  computed: mapState({
    isLoggedIn: state => state.isLoggedIn,
    buttonText: state => state.isLoggedIn ? 'Sign out' : 'Sign in'
  }),
  methods: {
    onButtonClick () {
      if (this.$store.state.isLoggedIn) {
        this.$store.dispatch('signOut')
        return
      }
      this.$store.dispatch('signIn', 'ditto')
    }
  }
}
</script>

<style lang="sass">
  .navbar
    color: black
    background-color: rgb( 0,100,0)
    z-index: 999
    min-height: 56px
    img
      height: 30px

    .login_btn
      color: whitesmoke
      background-color: rgb(0,128,0)
      width: 100px
      &:hover
        color: black
        background-color: white

    .login_btn_registration
      color: whitesmoke
      background-color: rgb(0,128,0)
      width: 200px
      &:hover
        color: black
        background-color: white

  .dropdown
    margin-right: 2px

  .dropdown-item
    color: black
    text-decoration: none
    &:hover
      text-decoration: none
      color: black

  a:hover
    color: black
    text-decoration: none

  .dropdown-button
    font-weight: bold
    background-color: transparent
    &:hover
      background-color: transparent
      border: none
    /*.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle*/
    /*  color: #fff*/
  /* background-color: #545b62; */
  /* border-color: #4e555b;
</style>
