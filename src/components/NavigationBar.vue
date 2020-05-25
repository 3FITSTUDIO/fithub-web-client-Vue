<template>

  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand >
      <img :src="require('../assets/white_logo.png')" width="40" height="30"
           class="d-inline-block mr-2 align-bottom" alt="">
         FITHUB
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link v-if="isLoggedIn" to="/dashboard">
            Dashboard
          </router-link>
        </b-nav-item>
        <b-dropdown text="Progress" v-if="isLoggedIn" variant="dark">
          <router-link to="/progressWeights"><a class="dropdown-item" > Weights </a></router-link>
          <router-link to="/progressMeasurements"><a class="dropdown-item" > Measurements </a></router-link>
          <router-link to="/progressCalories"><a class="dropdown-item" > Calories </a></router-link>
          <router-link to="/progressTrainings"><a class="dropdown-item" > Trainings </a></router-link>
        </b-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link v-if="isLoggedIn" to="/account">
            Account
          </router-link>
        </b-nav-item>
        <b-button id="right-top-nav-button" variant="dark" v-on:click="onButtonClick" type="submit" class="float-right mr-2">{{buttonText}}</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationBar',
  computed: mapState({
    isLoggedIn: state => state.isLoggedIn,
    isRegistrationViewUp: state => state.isRegistrationViewUp,
    buttonText: state => {
      if (state.isLoggedIn) {
        return 'Sign Out'
      } else if (state.isRegistrationViewUp) {
        return 'Sign In'
      } else return 'Sign Up'
    }
  }),
  methods: {
    onButtonClick () {
      if (this.isLoggedIn || this.isRegistrationViewUp) {
        this.$store.dispatch('signOut')
      } else this.$store.dispatch('register')
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn-dark
    font-weight: bold
    color: #fff
    background-color: #96d1a6!important
    border-color: #96d1a6!important
    &:hover
      color: #000000
      background-color: #ffffff!important
      border-color: #ffffff!important
  .navbar.navbar-dark.bg-dark
    background-color: #3f9380!important
  a
    color: white
  a.nav-link
    color: white
    font-weight: bold
    text-decoration: none
  .dropdown
    margin-right: 2px

  a.dropdown-item
    color: black
    text-decoration: none
    &:hover
      text-decoration: none
      color: black

  a:hover
    color: black
    text-decoration: none
</style>
