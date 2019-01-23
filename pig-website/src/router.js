import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vip from './views/Vip.vue'
import routes from './route.config'
Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Pig 官网',
      component: Home
    }, {
      path: '/vip',
      name: '购买',
      component: Vip
    }, ...routes]
})
router.afterEach((to) => {
  if (to.path === '/') {
    document.title = to.name
  } else {
    document.title = to.name + ' - Pig 官网';
  }

})
export default router
