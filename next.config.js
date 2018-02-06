const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://mkitt.net/hello' : '',
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
}
