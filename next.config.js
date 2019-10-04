const compose = require('next-compose')

const withCSS = require('@zeit/next-css')
module.exports = withCSS()

const withImages = require('next-images')
module.exports = withImages()

module.exports = compose([
  [withCSS],
  [withImages],
  {
    webpack: (config) => {
      /**some special code */
      return config
    }
  }
])