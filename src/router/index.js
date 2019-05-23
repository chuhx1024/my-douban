import Vue from 'vue'
import Router from 'vue-router'

import Pages from '../views/Pages'
import Home from '../views/Home'

Vue.use(Router)


export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/pages'
    },
    {
      path: '/pages',
      component: Pages,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
        {
          path:'home',
          name:'Home',
          component: Home
        }
      ]
    }
  ]
})