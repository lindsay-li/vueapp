import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import artist from '@/components/artists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/artist',
      component:artist
    }
  ]
})
