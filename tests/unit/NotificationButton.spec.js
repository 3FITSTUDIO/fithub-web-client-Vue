import Vuex from 'vuex'

import { BootstrapVue } from 'bootstrap-vue'
import NotificationsButton from '../../src/components/NotificationsButton'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex, BootstrapVue)

describe('WelcomeNameDiv.vue', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      notificationsData: [{ id: 1, message: 'Cos' }, { id: 2, message: 'cos' }]
    }
    store = new Vuex.Store({
      state
    })
  })

  it('check if notificationButton displays correct number of unseen notifications', () => {
    const wrapper = shallowMount(NotificationsButton, { store, localVue })
    wrapper.vm.$data.title = 'Notifications'
    const button = wrapper.find('b-button')
    expect(button.text()).toBe('Notifications (2)')
    console.log(state.notificationsData)
  })
})
