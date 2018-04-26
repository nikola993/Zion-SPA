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
  caseSensitive: '',
  routes: [
    { path: '/pocetna', name: 'pocetna', component: Pocetna },
    { path: '/kontakt', name: 'kontakt', component: Kontakt },
    //  { path: '/galerija/:id', name: 'Galerija', component: Galerija },

    //  obrisi ovaj red za opcije u navigaciju
    { path: '/galerija', name: 'galerija', component: Galerija },

    { path: '/', redirect: '/pocetna' },
    { path: '*', component: NotFound }
  ]
})
