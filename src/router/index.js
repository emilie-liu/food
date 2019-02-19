import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/owner/index'
import showstatements from '@/owner/showstatements'
import test from '@/owner/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: 'showstatements',
      name: 'showstatements',
      component: showstatements
    },
    {
      path:'test',//≤‚ ‘“≥√Ê¬∑”…
      name:'test',
      component:test
    }
  ]
})
