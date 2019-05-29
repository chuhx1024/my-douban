
// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  publicPath: '/',
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
}
