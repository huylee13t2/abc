import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popup from '@/components/Popup'
import Search from '@/components/Search'
import Demo from '@/components/Demo'
import ListView from '@/components/ListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/list-view',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
