// Storybook
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, select } from '@storybook/addon-knobs'
import { mapEnumKeys } from '../../../utils/storybook'
import { withInfo } from 'storybook-addon-vue-info'
import marked from 'marked'

// Components
import MoIcon from '../Base/Icon.vue'
// import MoBullet from '../Composed/Bullet.vue'

// Notes
import IconReadme from './Icon.md'
// import BulletReadme from './Bullet.md'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont
} from '../../../types'

const iconBaseStories = storiesOf('Utility Elements|Icons', module)
iconBaseStories.addDecorator(withKnobs)
iconBaseStories.addDecorator(withInfo)

iconBaseStories.add(
  'Icon',
  () => ({
    components: {
      MoIcon
    },
    props: {
      glyph: {
        type: String,
        default: IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]
      },
      styles: {
        type: Object,
        default: object('style', {color: '#454545', fontSize: '60px'})
      }
    },
    template: `
      <div class="story--example">
        <mo-icon
            :glyph="glyph"
            :style="styles">
        </mo-icon>
      </div>`
  }),
  {
    readme: {
      sidebar: marked(IconReadme)
    },
    info: {
      summary: 'Summary for Icon'
    }
  }
)