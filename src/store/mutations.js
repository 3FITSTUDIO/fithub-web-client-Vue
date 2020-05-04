import methods from './methods'
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
  },
  sortByDate (state, payload) {
    const result = payload.data.sort(methods.sortByDate).reverse()
    if (payload.path === 'calories') {
      state.caloriesData = result
    } else state.weightData = result
  },
  initialiseStore (state) {
    // Check if the ID exists
    if (sessionStorage.getItem('store')) {
      this.replaceState(
        Object.assign(state, JSON.parse(sessionStorage.getItem('store')))
      )
    }
  }
}
