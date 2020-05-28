import { BootstrapVue } from 'bootstrap-vue'
import MeasurementDifferenceDiv from '../../src/components/MeasurementDifferenceDiv'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('MeasurementDifferenceDiv.vue', () => {
  it('Check if good data props', () => {
    const wrapper = shallowMount(MeasurementDifferenceDiv, {
      propsData: {
        value: 5
      },
      localVue
    })
    expect(wrapper.find('a').text()).toBe(('(+5)'))
  })
})
