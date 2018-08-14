module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'xwin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /**
       * Добавление svg спрайт генератора
       */
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: /(assets\/img\/sprite\/svg)/,
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]',
        },
      });

      config.module.rules.push({
        test: /\.svg$/,
        include: /assets\/img\/sprite\/svg/,
        use: 'svg-sprite-loader',
      });
    },

    vendor: [
      'v-click-outside',
      'vue-the-mask',
    ],
  },
  plugins: [
    { src: '~/plugins/svgSpriteLoader', ssr: false },
    { src: '~/plugins/clickOutside', ssr: false },
    { src: '~/plugins/vMask', ssr: false },
    { src: '~/plugins/outline', ssr: false },
    { src: '~/plugins/preventScroll', ssr: false },
  ],
}

