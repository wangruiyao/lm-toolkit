import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './router'

Vue.use(Router);
console.log(RouterConfig)
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterConfig
});

// router.beforeEach((to, from, next) => {
//   if (Vue.ls.get(ACCESS_TOKEN)) { // has token
//     next()
//   } else { // no token
//     if (!to.meta.requiresAuth) {
//       next()
//     } else {
//       next({
//         path: '/blank',
//         redirect: to.fullPath
//       })
//     }
//   }
// })

export default router
