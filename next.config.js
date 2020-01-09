const compose = require('next-compose')

const withCSS = require('@zeit/next-css')
// module.exports = withCSS()

const withImages = require('next-images')
// module.exports = withImages()

const withSass = require('@zeit/next-sass')

module.exports = compose([
  [withCSS],
  [withImages],
  [withSass],
  {
    webpack: (config) => {
      /**some special code */
      return config
    }
  }
])
var webpack = require("webpack");
module.exports = {
  webpack: (config, { dev }) => {
      config.plugins.push(
          new webpack.ProvidePlugin({
              '$': 'jquery',
              'jQuery': 'jquery',
          })
      )
      return config
  }
}

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/gioi-thieu-benh-vien': { page: '/gioi-thieu-benh-vien' },
      '/service': { page: '/service' },
      '/register': { page: '/register' },
      '/contact': { page: '/contact' }
    };
  }
};