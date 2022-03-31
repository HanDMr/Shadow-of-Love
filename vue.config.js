const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    open: true,
    port: 8888,
    proxy: {
      '/api': {
        target: '*',
        changeOrigin: true,
      }
    }
  }
}