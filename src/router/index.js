import Vue from 'vue'
import Router from 'vue-router'
import Pocetna from '@/components/Pocetna'
import Galerija from '@/components/Galerija'
import Kontakt from '@/components/Kontakt'
import NotFound from '@/components/NotFound'
import googleae from '@/components/googleaeb342a2df19ecd3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/Pocetna', name: 'Pocetna', component: Pocetna },
    { path: '/Kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/Pocetna/googleaeb342a2df19ecd3.html', name: 'googleae', component: googleae },
    //  { path: '/Galerija/:id', name: 'Galerija', component: Galerija },

    //  obrisi ovaj red za opcije u navigaciju
    { path: '/Galerija', name: 'Galerija', component: Galerija },

    { path: '/', redirect: '/Pocetna' },
    { path: '/Pocetna/', redirect: '/Pocetna' },
    { path: '*', component: NotFound }
  ]
})
