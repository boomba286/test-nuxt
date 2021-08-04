import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b7805c3 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _e18b68b0 = () => interopDefault(import('../pages/admin/homes.vue' /* webpackChunkName: "pages/admin/homes" */))
const _58ffaf0e = () => interopDefault(import('../pages/admin/test.vue' /* webpackChunkName: "pages/admin/test" */))
const _f95efa38 = () => interopDefault(import('../pages/no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _ba673f38 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _11950574 = () => interopDefault(import('../pages/home/_id.vue' /* webpackChunkName: "pages/home/_id" */))
const _4a08b1c6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _7b7805c3,
    name: "admin",
    children: [{
      path: "homes",
      component: _e18b68b0,
      name: "admin-homes"
    }, {
      path: "test",
      component: _58ffaf0e,
      name: "admin-test"
    }]
  }, {
    path: "/no-access",
    component: _f95efa38,
    name: "no-access"
  }, {
    path: "/search",
    component: _ba673f38,
    name: "search"
  }, {
    path: "/home/:id?",
    component: _11950574,
    name: "home-id"
  }, {
    path: "/",
    component: _4a08b1c6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
