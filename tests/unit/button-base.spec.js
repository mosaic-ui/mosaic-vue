import { mount } from '@vue/test-utils'
import MoButtonBase from '../../src/components/Button/Base/ButtonBase.vue'

describe('ButtonBase', () => {
  it('renders props.buttonText when passed', () => {
    const buttonText = 'Delete'
    const wrapper = mount(MoButtonBase, {
      propsData: { buttonText }
    })
    expect(wrapper.props().buttonText).toBe(buttonText)
  })

  it('renders props.shape when passed', () => {
    const shape = 'square'
    const wrapper = mount(MoButtonBase, {
      propsData: { shape }
    })
    expect(wrapper.classes()).toContain(`mo-button-square`)
  })

  it('successfully applies click event', () => {
    const wrapper = mount(MoButtonBase)
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})