const purgeCSS = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

if (!process.env.WEBPACK_DEV_SERVER) {
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new BundleAnalyzerPlugin(),
    purgeCSS({
      content: ['./src/**/*.js', './public/index.html'],
      css: ['./src/**/*.css'],
    }),
  ])
}
