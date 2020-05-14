import router from '../router'

export default {
  async signIn ({ commit, state }, payload) {
    console.log(payload.login, payload.password)
    const result = await fetch(state.url + 'user?' + new URLSearchParams({
      login: payload.login,
      password: payload.password
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (result !== undefined) {
      if (result.length !== 0) {
        state.userId = result[0].id
        state.username = result[0].first_name
        commit('signIn')
        await router.push('/dashboard')
      } else state.accessDenied = true
    } else {
      state.serverError = true
    }
  },
  async signOut ({ commit }) {
    await router.push('/')
    console.log('out')
    commit('signOut')
  },
  async toSingInView (commit) {
    await router.push('/')
  },
  async register ({ commit, state }) {
    state.isRegistrationViewUp = true
    await router.push('/registration')
  },
  async getArrayData ({ commit, state }, payload) {
    console.log(state.url + payload.path + '?' + new URLSearchParams({ userId: state.userId }))
    const result = await fetch(state.url + payload.path + '?' + new URLSearchParams({
      userId: state.userId
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (result !== undefined) {
      console.log(result)
      if (payload.path === 'calories') {
        state.caloriesData = result
      } else if (payload.path === 'weights') {
        state.weightsData = result
      } else if (payload.path === 'measurements') {
        state.measurementsData = result
      }
      commit('sortByDate', { data: result, name: payload.path })
    }
  },
  async checkIfEmailOrLoginInDataBase ({ commit, state }, payload) {
    console.log(payload.email, payload.login)
    const resultLogin = await fetch(state.url + 'user?' + new URLSearchParams({
      login: payload.login
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (resultLogin !== undefined) {
      if (resultLogin.length !== 0) {
        state.loginCorrect = false
      }
    }
    const emailLogin = await fetch(state.url + 'user?' + new URLSearchParams({
      email: payload.email
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (emailLogin !== undefined) {
      if (emailLogin.length !== 0) {
        state.emailCorrect = false
      }
    }
    if (state.emailCorrect && state.loginCorrect) {
      await fetch(state.url + 'user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: payload.name,
          last_name: payload.surname,
          email: payload.email,
          login: payload.login,
          password: payload.password
        })
      })
        .then(() => {
          state.userCreated = true
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          state.errorWhileCreatingUser = true
        })
    }
  }
}
