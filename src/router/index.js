import Vue from 'vue'
import Router from 'vue-router'
import Pocetna from '@/components/Pocetna'
import Galerija from '@/components/Galerija'
import Kontakt from '@/components/Kontakt'
import NotFound from '@/components/NotFound'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/pocetna', name: 'Pocetna', component: Pocetna },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    //  { path: '/galerija/:id', name: 'Galerija', component: Galerija },

    //  obrisi ovaj red za opcije u navigaciju
    { path: '/galerija', name: 'Galerija', component: Galerija },

    { path: '/', redirect: '/pocetna' },
    { path: '*', component: NotFound }
  ]
})
