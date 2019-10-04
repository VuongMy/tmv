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