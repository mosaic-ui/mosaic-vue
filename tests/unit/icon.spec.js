import { mount } from '@vue/test-utils'
import { IconFont } from '../../src/types'
import MoIcon from '../../src/components/Icon/Base/Icon.vue'

describe('Icon', () => {
  it('applies glyph class', () => {
    const glyph = IconFont.BarChart
    const wrapper = mount(MoIcon, {
      propsData: { glyph }
    })
    expect(wrapper.classes()).toContain(`bar-chart`)
  })
})