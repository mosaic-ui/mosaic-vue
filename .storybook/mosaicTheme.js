import { create } from '@storybook/theming';

import logo from './mosaic-ui.svg'
import { typography } from '@storybook/theming/dist/base'
import { chromeLight } from '@storybook/theming/dist/modules/syntax'

export default create({
  base: 'dark',

  colorPrimary: '#22ADF6',
  colorSecondary: 'rgb(27,27,27)',

  // UI
  appBg: '#454545',
  appContentBg: '#353535',
  appBorderColor: '#111111',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: '"RobotoMono", monospace',

  // Text colors
  textColor: '#f3f3f3',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: '#a4a8b6',
  barSelectedColor: '#f2f2f2',
  barBg: '#202020',

  sidebarSelectedColor: '#3B3B3B',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d4d7dd',
  inputTextColor: '#31313d',
  inputBorderRadius: 4,

  brandTitle: 'Mosaic',
  brandUrl: 'https://mosaic-ui.github.io/mosaic-vue',
  brandImage: logo,

  addonActionsTheme: {
    ...chromeLight,
    BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: 'transparent',
  }
});
