const path = require('path')
const updateWebpackConfig = require('storybook-readme/vue/updateWebpackConfig')

module.exports = ({config}) => {
  updateWebpackConfig(config)

  config.module.rules.push(
    // {
    //   resourceQuery: /blockType=docs/,
    //   use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
    // },
    {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.(eot|png|eot|ttf|svg)(\?[a-z0-9#=&.]+)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'Fonts/[name].[ext]',
            outputPath: 'Fonts/',
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    },
    {
      test: /\.(css|scss)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    },
    {
      test: /\.vue$/,
      loader: 'vue-docgen-loader',
      enforce: 'post'
    }
  )

  return config
}