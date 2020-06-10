import methods from './methods'
export default {
  signIn (state) {
    state.isLoggedIn = true
  },
  signOut (state) {
    state.sleepDataLoaded = false
    state.caloriesDataLoaded = false
    state.weightsDataLoaded = false
    state.stepsDataLoaded = false
    state.measurementsDataLoaded = false
    state.notificationsDataLoaded = false
    state.trainingsDataLoaded = false
    state.isLoggedIn = false
    state.isRegistrationViewUp = false
    state.login = ''
    state.username = ''
    state.surname = ''
    state.email = ''
    state.userId = null
    state.password = ''
    state.sex = ''
    state.height = null
    state.yearOfBirth = null
    state.accessDenied = false
    state.serverError = false
    state.caloriesData = []
    state.sleepData = []
    state.stepsData = []
    state.weightsData = []
    state.measurementsData = []
    state.trainingsData = []
    state.notificationsData = []
    state.emailCorrect = true
    state.loginCorrect = true
    state.userCreated = false
    state.errorWhileCreatingUser = false
    state.emailChanged = false
    state.passwordChanged = false
    state.heightChanged = false
    state.errorWhileChangingEmail = false
    state.errorWhileChangingPassword = false
    state.errorWhileChangingHeight = false
  },
  sortByDate (state, payload) {
    const result = payload.data.sort(methods.sortByDate).reverse()
    if (payload.path === 'calories') {
      state.caloriesData = result
      state.caloriesDataLoaded = true
    } else if (payload.path === 'weights') {
      state.weightsData = result
      state.weightsDataLoaded = true
    } else if (payload.path === 'measurements') {
      state.measurementsData = result
      state.measurementsDataLoaded = true
    } else if (payload.path === 'sleep') {
      state.sleepData = result
      state.sleepDataLoaded = true
    } else if (payload.path === 'steps') {
      state.stepsData = result
      state.stepsDataLoaded = true
    } else if (payload.path === 'trainings') {
      state.trainingsData = result
      state.trainingsDataLoaded = true
    } else if (payload.path === 'notifications') {
      state.notificationsData = result
      state.notificationsDataLoaded = true
    }
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
