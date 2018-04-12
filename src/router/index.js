import Vue from 'vue'
import Router from 'vue-router'
import landingpage from '@/components/landingpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: landingpage
    }
  ]
})
