const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 3334,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: false,
      },
    },
  },
});
