import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Manager from '@/components/Manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { level: 1 }
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager,
      meta: { level: 2 }
    }
  ]
})
