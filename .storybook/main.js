module.exports = {
  stories: ['../src/**/*.stories.(js|md)'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-vue-info/lib/register',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-readme'
  ]
}
