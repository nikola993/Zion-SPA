// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// In main.js
Vue.use(VueScrollReveal)
Vue.use(VueResource)

// You can also pass in default options
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: true
})

/* eslint-disable no-new */
const root = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
