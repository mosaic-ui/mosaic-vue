// Storybook
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { mapEnumKeys } from '../../../utils/storybook'
import { withInfo } from 'storybook-addon-vue-info'
import marked from 'marked'

// Components
import MoButtonBase from '../Base/ButtonBase.vue'
import MoButton from '../Composed/Button.vue'

// Notes
import ButtonBaseReadme from './ButtonBase.md'
import ButtonReadme from './Button.md'

// Types
import {
  ComponentColor,
  ComponentSize,
  ButtonShape,
  ComponentStatus,
  ButtonType,
  ButtonText,
  IconFont
} from '../../../types'

const buttonBaseStories = storiesOf('Components|Buttons', module)
buttonBaseStories.addDecorator(withKnobs)
buttonBaseStories.addDecorator(withInfo)

buttonBaseStories.add(
  'Base Button',
  () => ({
    components: {
      MoButtonBase
    },
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
    template: `
      <div class="story--example">
        <mo-button-base
            @click="logClick"
            @mouseout="logMouseOut"
            @mouseleave="logMouseLeave"
            @mouseover="logMouseOver"
            @mouseenter="logMouseEnter"
            :active="active"
            :color="color"
            :shape="shape"
            :size="size"
            :status="status"
            :title-text="titleText"
            :type="buttonType">
          {{ buttonText }}
        </mo-button-base>
      </div>`,
    methods: {
      logClick: action('click'),
      logMouseEnter: action('mouseenter'),
      logMouseOver: action('mouseover'),
      logMouseOut: action('mouseout'),
      logMouseLeave: action('mouseleave')
    }
  }),
  {
    readme: {
      sidebar: marked(ButtonBaseReadme)
    },
    info: {
      summary: 'Summary for Button base'
    }
  }
)

const buttonComposedStories = storiesOf('Components|Buttons', module)
buttonComposedStories.addDecorator(withKnobs)
buttonComposedStories.addDecorator(withInfo)

buttonComposedStories.add(
  'Standard Button',
  () => ({
      components: {
        MoButton
      },
      props: {
        active: {
          type: Boolean,
          default: boolean('active', false)
        },
        buttonType: {
          type: String,
          default: ButtonType[select('buttonType', mapEnumKeys(ButtonType), 'Submit')]
        },
        className: {
          type: String,
          default: text('className', '')
        },
        color: {
          type: String,
          default: ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Default')]
        },
        icon: {
          type: String,
          default: IconFont[select('icon', mapEnumKeys(Object.assign({ None: 'none' }, IconFont)), 'None')]
        },
        placeIconAfterText: {
          type: Boolean,
          default: boolean('placeIconAfterText', false)
        },
        shape: {
          type: String,
          default: ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
        },
        size: {
          type: String,
          default: ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        },
        status: {
          type: String,
          default: ComponentStatus[select('status', mapEnumKeys(ComponentStatus), 'Default')]
        },
        text: {
          type: String,
          default: ButtonText[select('buttonText', mapEnumKeys(ButtonText), 'Default')]
        },
        titleText: {
          type: String,
          default: text('titleText', 'Save Record')
        }
      },
      template: `
        <div class="story--example">
          <mo-button
              @click="logClick"
              @mouseenter="logMouseEnter"
              @mouseover="logMouseOver"
              @mouseout="logMouseOut"
              @mouseleave="logMouseLeave"
              :active="active"
              :color="color"
              :icon="icon"
              :place-icon-after-text="placeIconAfterText"
              :shape="shape"
              :size="size"
              :status="status"
              :text="text"
              :title-text="titleText"
              :type="buttonType">
          </mo-button>
        </div>`,
      methods: {
        logClick: action('click'),
        logMouseEnter: action('mouseenter'),
        logMouseOver: action('mouseover'),
        logMouseOut: action('mouseout'),
        logMouseLeave: action('mouseleave')
      }
    }
  ),
  {
    readme: {
      sidebar: marked(ButtonReadme)
    },
    info: {
      summary: 'Summary for Button'
    }
  }
)
