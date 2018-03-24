<template>
  <div id="app">
    <div>
      <app-header></app-header>
        <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Heder.vue'
import AppFooter from './components/Futer.vue'
export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="scss">
@import "~bulma";
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 700;
}
</style>
