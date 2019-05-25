module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',  //目标接口域名
        ws: true,
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/api'   //重写接口
        }
      } 
    }
  }
}