import Vue from 'vue'
import Router from 'vue-router'

import Pages from '../views/Pages'
import Home from '../views/Home'
import Search from '../views/Search'
import Detail from '../views/Detail'

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
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: Detail
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