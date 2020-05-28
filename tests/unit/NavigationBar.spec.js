import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import NavigationBar from '../../src/components/NavigationBar'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex, BootstrapVue)

describe('NavigationBar.vue', () => {
  let actions
  let store
  let state

  beforeEach(() => {
    state = {
      isLoggedIn: false,
      isRegistrationViewUp: true
    }
    actions = {
      signOut: jest.fn(),
      register: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state
    })
  })

  it('does sign IN/OUT/UP button displays good text value', () => {
    const wrapper = shallowMount(NavigationBar, { store, localVue })
    expect(wrapper.find('#right-top-nav-button').text()).toBe('Sign In')
  })

  it('does sign IN/OUT/UP button calls a method', () => {
    const wrapper = shallowMount(NavigationBar, { store, localVue })
    const button = wrapper.find('#right-top-nav-button')
    button.trigger('click')
    expect(actions.signOut).toHaveBeenCalled()
  })
})
