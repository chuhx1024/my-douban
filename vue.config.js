// module.exports = {
//   // devServer: {
//   //   open: true,
//   //   host: 'localhost',
//   //   port: 8081,
//   //   proxy: {
//   //     '/apis': {
//   //       target: 'https://api.douban.com/v2',  //目标接口域名
//   //       // ws: true,
//   //       secure: false,  // 如果是https接口，需要配置这个参数
//   //       changeOrigin: true,  //是否跨域
//   //       pathRewrite: {
//   //         '^/apis': '/api'   //重写接口
//   //       }
//   //     } 
//   //   }
//   // }
//   devServer: {
//     proxy: {
//         '/api': {
//             target: 'https://api.douban.com/v2/event/list',
//             secure: false,  // 如果是https接口，需要配置这个参数
//             changeOrigin: true,
//             ws: true,
//             pathRewrite: {
//               '^/api': ''
//             }
//         }
//     }
//   }
// }
// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  publicPath: '/',
  devServer: {
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
  }
}
