const { resolve } = require('path');
const rules = require('vue-webpack-loaders');

module.exports = {
  components: 'components/**/[A-Z]*.vue',
  webpackConfig: {
    resolve: {
      extensions: ['.js', '.json', '.vue', '.ts'],
      alias: {
        '~': resolve(__dirname, ''),
        '@': resolve(__dirname, ''),
      },
    },
    module: {
      rules,
    },
  },
  styles: {
    Playground: {
      preview: {
        backgroundColor: '#50138c'
      },
    },
  },
  showUsage: true,
  vuex: './store/common.js',
};