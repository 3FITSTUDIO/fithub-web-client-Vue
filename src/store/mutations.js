export default {
  logData (state) {
    console.log(state.login)
    console.log(state.password)
  },
  signIn (state) {
    state.isLoggedIn = true
  },
  signOut (state) {
    state.isLoggedIn = false
    state.isRegistrationViewUp = false
    this.state.user = null
    this.state.userId = null
  }
}
