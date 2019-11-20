// Storybook
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { mapEnumKeys } from '../../../utils/storybook'
import { withInfo } from 'storybook-addon-vue-info'

// Components
import ButtonBase from '../Base/ButtonBase'

// Notes
import ButtonBaseReadme from './ButtonBase.md'
import marked from 'marked'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  ComponentStatus,
  ButtonType,
  ButtonText
} from '../../../types'

const stories = storiesOf('Components|Buttons/Button Base', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)

stories.add(
  'default',
  () => ({
    components: {ButtonBase},
    props: {
      active: {
        type: Boolean,
        default: boolean('active', false)
      },
      buttonText: {
        type: String,
        default: ButtonText[select('buttonText', mapEnumKeys(ButtonText), 'Default')]
      },
      buttonType: {
        type: String,
        default: ButtonType[select('buttonType', mapEnumKeys(ButtonType), 'Submit')]
      },
      color: {
        type: String,
        default: ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Default')]
      },
      shape: {
        type: String,
        default: ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
      },
      size: {
        type: String,
        default: ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Medium')]
      },
      status: {
        type: String,
        default: ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Default')]
      },
      titleText: {
        type: String,
        default: text('titleText', 'Save Record')
      }
    },
    template: `<div class="story--example">
      <button-base
        :active="active"
        @click="log"
        :titleText="titleText"
        :color="color"
        :shape="shape"
        :status="status"
        :type="buttonType"
        :size="size">
        {{ buttonText }}
      </button-base>
    </div>`,
    methods: {
      log: e => {
        e.preventDefault()
        action('click')(e.target)
      }
    }
  }),
  {
    readme: {
      sidebar: marked(ButtonBaseReadme)
    },
    info: {
      summary: 'Summary for MyComponent'
    }
  }
)
