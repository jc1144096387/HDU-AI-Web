module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 9997,
    proxy: {
      '/common': {
        target: 'http://47.99.47.230:8090', // 接口请求地址
      },
      '/application': {
        target: 'http://47.99.47.230:8090', // 接口请求地址
      },
      '/user': {
        target: 'http://47.99.47.230:8090', // 接口请求地址
      },
      
    },
    // historyApiFallback: {
    //   index: 'index.html',
    //   // // to: 打包项目路径
    //   // rewrites: [
    //   //   {
    //   //     from: /^.*/, 
    //   //     to: '/index.html'
    //   //   }
    //   // ]
    // }
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 打包时的公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/hdu-ai-web/' : '/',
}