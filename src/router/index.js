import Vue from 'vue'
import Router from 'vue-router'

import Pages from '../views/Pages'
import Home from '../views/Home'
import Search from '../views/Search'

Vue.use(Router)


export default new Router({
  mode: 'hash',
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
    },
    {
      path: '/search',
      name:'search',
      components: {
        default: Pages,
        search: Search,
      },
    }
  ]
})