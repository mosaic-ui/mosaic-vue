import { addParameters, addDecorator } from '@storybook/vue'
import {addReadme} from 'storybook-readme/vue'
import { setDefaults } from 'storybook-addon-vue-info'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import './story.scss'

const decoratorVueTemplate = () => ({ template: `<div style="text-align:center"><story/></div>` })
addDecorator(decoratorVueTemplate)

addDecorator(addReadme)

addParameters({
  readme: {
    codeTheme: 'a11y-dark',
    theme: {
      textColor: '#f1f1f1',
      appBg: '#454545'
    }
  },
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
    container: DocsContainer,
    page: DocsPage,
  }
})

setDefaults({
  previewClassName: 'vue-info-addon'
})
