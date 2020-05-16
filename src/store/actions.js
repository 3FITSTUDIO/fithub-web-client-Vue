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
        state.password = result[0].password
        state.login = result[0].login
        state.surname = result[0].last_name
        state.email = result[0].email
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
  async checkIfEmailOrLoginInDataBase ({ commit, state, dispatch }, payload) {
    console.log(payload.email, payload.login)
    dispatch('checkIfUserWithParamInDatabase', payload.login)
    dispatch('checkIfUserWithParamInDatabase', payload.email)
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
  },
  async checkIfUserWithParamInDatabase ({ state, commit }, param) {
    const result = await fetch(state.url + 'user?' + new URLSearchParams({
      param
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (result !== undefined) {
      if (result.length !== 0) {
        if (param.include('@')) {
          state.emailCorrect = false
        } else state.loginCorrect = false
      }
    }
  },
  async changeParam ({ state, commit }, param) {
    // TODO
  }
}
