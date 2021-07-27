export default {
  components: true,
  head: {
    titleTemplate: 'Mastering Nuxt: %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: 'utf-8'
    }]
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi.js',
    '~/plugins/auth.client.js'
  ],
  modules: [
    '~/modules/auth',
    '~/modules/algolia'
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: '487451596573-72si57v1vvgvgu384vuk3g576hkgn40j.apps.googleusercontent.com'
    },
    algolia: {
      appId: 'NCSWKIZ0F2',
      key: 'a5d2484281b264b5ef6d3204662db516',
    }
  },
  privateRuntimeConfig: {
    algolia: {
      appId: 'NCSWKIZ0F2',
      key: '5374e6ea1d34feb12b098ce3ff6deafa',
    }
  },
  serverMiddleware: []
}