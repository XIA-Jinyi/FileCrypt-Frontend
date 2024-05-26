const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:2057/',
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/static/'
    : '/'
})
