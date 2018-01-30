const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'http://mkitt.net/hello' : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
}
