import Vue from 'vue'
import Router from 'vue-router'
import LanePage from '@/components/LanePage'
import Popup from '@/components/Popup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LanePage',
      component: LanePage
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    }
  ]
})
