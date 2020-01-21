import { addons } from '@storybook/addons'
import mosaicTheme from './mosaicTheme'

addons.setConfig({
  theme: mosaicTheme,
  hierarchyRootSeparator: /\|/,
  panelPosition: 'right'
})
