import { mount } from '@vue/test-utils'
import ButtonBase from '../../src/components/Button/Base/ButtonBase.vue'

describe('ButtonBase tests', () => {
  it('renders props.buttonText when passed', () => {
    const buttonText = 'Delete'
    const wrapper = mount(ButtonBase, {
      propsData: { buttonText }
    })
    expect(wrapper.props().buttonText).toBe(buttonText)
  })

  it('renders props.shape when passed', () => {
    const shape = 'square'
    const wrapper = mount(ButtonBase, {
      propsData: { shape }
    })
    expect(wrapper.classes()).toContain(`mo-button-${shape}`)
  })

  it('successfully applies click event', () => {
    const wrapper = mount(ButtonBase)
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})