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
    '~/plugins/dataApi',
    '~/plugins/auth.client',
    '~/plugins/vCalendar.client',
    '~/plugins/stripe.client'
  ],
  modules: [
    '~/modules/auth',
    '~/modules/algolia',
    '~/modules/cloudinary',
    '~/modules/stripe',
    '@nuxtjs/cloudinary',
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  cloudinary: {
    cloudName: 'de5msdgdj',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/de5msdgdj/image/upload/'
    }
  },
  serverMiddleware: [
    function(req, res, next) {
      console.log(req.body)
      next()
    }
  ],
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
    },
    cloudinary: {
      apiKey: '488191814516587',
    },
    stripe: {
      key: "pk_test_51JKwuOAcQ07H4HJdk65vTfjwJRkqE3nsfyFuBaY3wNrt5w5lpHhE7qgip0ZmaBqcgtSHHtcXSSfVZgZZ5Zv5uMS800r1sNogpV"
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: 'NCSWKIZ0F2',
      key: '5374e6ea1d34feb12b098ce3ff6deafa',
    },
    cloudinary:{
      apiSecret: 'R2nPsknYI0ADfoiYvGXWIMhoka0',
    },
    stripe: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
    }
  }
}