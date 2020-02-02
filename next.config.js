const compose = require('next-compose')

const withCSS = require('@zeit/next-css')
// module.exports = withCSS()

const withImages = require('next-images')
// module.exports = withImages()

const withSass = require('@zeit/next-sass')

const withProgressBar = require('nextjs-progressbar')

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
      '/dich-vu': { page: '/dich-vu' },
      '/qui-trinh-dang-ky': { page: '/qui-trinh-dang-ky' },
      '/lien-he': { page: '/lien-he' }
    };
  }
};
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})

