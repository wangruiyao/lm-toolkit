var path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  outputDir: './public/dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  css: {
    loaderOptions: {
      postcss: { // 配置px2rem
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      },
      sass: {
        data: `
          @import "./src/assets/styles/variables.scss";
          @import "./src/assets/styles/mixins.scss";
        `
      }
    }
  },
  pluginOptions: {},
  devServer: {
    historyApiFallback: true, // history模式开启
    proxy: {
      '/api': {
        target: 'http://yapi.imeete.com/mock/320',
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('router', resolve('src/router'))
      .set('examples', resolve('src/examples'))
      .set('core', resolve('src/core'))
  }
}
