import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import methods from './methods'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: new URL('http://localhost:3000/'),
    isLoggedIn: false,
    isRegistrationViewUp: false,
    secretToken: 'token123',
    login: '',
    username: '',
    surname: '',
    email: '',
    userId: null,
    password: '',
    sex: '',
    height: null,
    yearOfBirth: null,
    accessDenied: false,
    serverError: false,
    sleepDataLoaded: false,
    caloriesDataLoaded: false,
    weightsDataLoaded: false,
    stepsDataLoaded: false,
    measurementsDataLoaded: false,
    notificationsDataLoaded: false,
    trainingsDataLoaded: false,
    caloriesData: [],
    sleepData: [],
    stepsData: [],
    weightsData: [],
    measurementsData: [],
    trainingsData: [],
    notificationsData: [],
    emailCorrect: true,
    loginCorrect: true,
    userCreated: false,
    errorWhileCreatingUser: false,
    emailChanged: false,
    passwordChanged: false,
    heightChanged: false,
    errorWhileChangingEmail: false,
    errorWhileChangingPassword: false,
    errorWhileChangingHeight: false
  },
  mutations,
  actions,
  methods
})

store.subscribe((mutation, state) => {
  sessionStorage.setItem('store', JSON.stringify(state))
})

export default store
