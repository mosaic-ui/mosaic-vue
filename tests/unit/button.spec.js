import { mount } from '@vue/test-utils'
import IconAndText from '../../src/components/Button/Composed/IconAndText.vue'
import MoIcon from '../../src/components/Icon/Base/Icon'
import { IconFont } from '../../src/types'

describe('Button', () => {
  it('should render icon, and icon should appear to the right of the button label', () => {
    const icon = IconFont.Alerts
    const placeIconAfterText = true
    const wrapper = mount(IconAndText, {
      propsData: { icon, placeIconAfterText }
    })

    const iconComponent = wrapper.findAll(MoIcon).at(0)

    expect(iconComponent.is(MoIcon)).toBe(true)
    expect(iconComponent.classes()).toContain(`${icon}`)

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.find(`.mo-button-label + .${icon}`).exists()).toBe(true)
  })

  it('should render icon, and icon should appear to the left of the button label', () => {
    const icon = IconFont.Alerts
    const placeIconAfterText = false
    const wrapper = mount(IconAndText, {
      propsData: { icon, placeIconAfterText }
    })

    const iconComponent = wrapper.findAll(MoIcon).at(0)

    expect(iconComponent.is(MoIcon)).toBe(true)
    expect(iconComponent.classes()).toContain(`${icon}`)

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.find(`.${icon} + .mo-button-label`).exists()).toBe(true)
  })
})
