import { configure, addParameters, addDecorator } from '@storybook/vue'
import mosaicTheme from './mosaicTheme'
import {addReadme} from 'storybook-readme/vue'
import { setDefaults } from 'storybook-addon-vue-info'
import './Story.scss'

const decoratorVueTemplate = () => { return { template: `<div style="text-align:center"><story/></div>` }}
addDecorator(decoratorVueTemplate)

addDecorator(addReadme)

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    theme: mosaicTheme,
    panelPosition: 'right'
  },
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
  }
})

setDefaults({
  previewClassName: 'vue-info-addon'
})

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => {
    console.log('filename', filename)
    return req(filename)
  })
}

configure(loadStories, module)
