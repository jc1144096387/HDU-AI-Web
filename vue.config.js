module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 9997,
    proxy: {
      '/api': {
        target: 'http://47.99.47.230:8090', // 接口请求地址
      },


    },
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 打包时的公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/hdu-ai-web/' : '/',

  // 添加loader 参考：https://cli.vuejs.org/zh/guide/webpack.html#修改-loader-选项


  chainWebpack: config => {
    // md Loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader')
      .tap(options => {
        // 修改它的选项...
        let ops = {};
        ops.preprocess = function (MarkdownIt, Source) {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<div class="table-container"><table class="table">';
          };
          MarkdownIt.renderer.rules.table_close = function () {
            return '</table></div>';
          };
          return Source;
        }
        return ops
      })
      .end()
      // 你还可以再添加一个 loader
      .use('text-loader')
      .loader('text-loader')
      .end()
  },
}