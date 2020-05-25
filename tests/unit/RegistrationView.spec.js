import errorModel from '../../src/models/ErrorInputeModel'
import RegistrationView from '../../src/views/RegistrationView'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex, BootstrapVue)

describe('RegistrationView.vue', () => {
  let store
  let state
  let actions

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      actions
    })
  })
  it('Check if methods of validation are correct', () => {
    const wrapper = shallowMount(RegistrationView, { store, localVue })
    wrapper.setData({
      selectedHeight: 163,
      selectedSex: 'M',
      selectedYearOfBirth: 1997,
      login: {
        value: 'Szymon',
        isCorrect: true
      },
      name: {
        value: 'Szymon',
        isCorrect: true
      },
      email: {
        value: 'Szymon@wp.pl',
        isCorrect: true
      },
      surname: {
        value: 'Debski',
        isCorrect: true
      },
      password: {
        value: 'Test123!',
        isCorrect: true
      },
      confirm_password: 'Test123!',
      arePasswordsCorrect: true
    })
    console.log(wrapper.vm.$data.login,
      wrapper.vm.$data.name,
      wrapper.vm.$data.surname,
      wrapper.vm.$data.email,
      wrapper.vm.$data.password,
      wrapper.vm.$data.confirm_password,
      wrapper.vm.$data.selectedSex,
      wrapper.vm.$data.selectedHeight,
      wrapper.vm.$data.selectedYearOfBirth)
    const resultOnNotEmptyInputs = errorModel.checkIfInputsNotEmpty(wrapper.vm.$data.login,
      wrapper.vm.$data.name,
      wrapper.vm.$data.surname,
      wrapper.vm.$data.email,
      wrapper.vm.$data.password,
      wrapper.vm.$data.confirm_password,
      wrapper.vm.$data.selectedSex,
      wrapper.vm.$data.selectedHeight,
      wrapper.vm.$data.selectedYearOfBirth)
    expect(resultOnNotEmptyInputs).toBe(true)
    const resultOnIfCorrect = errorModel.checkIfAllInputsValid(wrapper.vm.$data.login,
      wrapper.vm.$data.name,
      wrapper.vm.$data.surname,
      wrapper.vm.$data.email,
      wrapper.vm.$data.password,
      wrapper.vm.$data.arePasswordsCorrect)
    expect(resultOnIfCorrect).toBe(true)
  })
})
