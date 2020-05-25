import Vuex from 'vuex'
import WelcomeNameDiv from '../../src/components/WelcomeNameDiv'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('WelcomeNameDiv.vue', () => {
  let store
  let state

  beforeEach(() => {
    state = {

      username: 'Szymon'
    }
    store = new Vuex.Store({
      state
    })
  })

  it('check if name is displaying correctly', () => {
    const wrapper = shallowMount(WelcomeNameDiv, { store, localVue })
    expect(wrapper.find('h1').text()).toBe('Szymon, welcome in FitHUB!')
  })
})
