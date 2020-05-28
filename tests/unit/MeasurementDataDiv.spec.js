import { BootstrapVue } from 'bootstrap-vue'
import MeasurementDataDiv from '../../src/components/MeasurementDataDiv'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('MeasurementDataDiv.vue', () => {
  it('Check if good data props', () => {
    const wrapper = shallowMount(MeasurementDataDiv, {
      propsData: {
        data: [
          {
            values: [50, 51, 52, 49, 48, 47]
          },
          {
            values: [50, 50, 50, 50, 50, 50]
          }
        ]
      },
      localVue
    })

    const getDiffArray = () => {
      const tempArray = []
      if (wrapper.vm.$props.data.length > 1) {
        for (let i = 0; i < wrapper.vm.$props.data[0].values.length; i++) {
          const item = wrapper.vm.$props.data[0].values[i] - wrapper.vm.$props.data[1].values[i]
          tempArray.push(item)
        }
        return tempArray.join(', ')
      } else return [].fill(0, 0, 7)
    }

    const diffArray = getDiffArray()

    expect(diffArray).toBe('0, 1, 2, -1, -2, -3')
  })
})
