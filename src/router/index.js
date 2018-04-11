import Vue from 'vue'
import Router from 'vue-router'
import landingpage from '@/components/landingpage'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router, BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: landingpage
    }
  ]
})
