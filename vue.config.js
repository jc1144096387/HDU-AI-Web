module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 9998,
    proxy: {
      '/': {
        target: 'http://localhost:8085',  // 请求本地 
      }
    }
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 打包时的公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/safetyhelmet-admin-web/' : '/',
}