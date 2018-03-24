<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" id="logolink" to="/Pocetna">
        <img src="../assets/z.png" alt="Zion: Izrada namestaja">
      </router-link>
      <div @click="makeBurger" class="navbar-burger burger" data-target="navBar" v-bind:class="{ 'is-active': activator }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navBar" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/Pocetna">
          Pocetna
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-item">
            Galerija
          </a>
          <hr class="navbar-divider">
          <div class="navbar-dropdown is-boxed">
            <router-link class="navbar-item" to="/Galerija/Stolovi">
              Stolovi
            </router-link>
            <router-link class="navbar-item" to="/Galerija/Stolice">
              Stolice
            </router-link>
            <router-link class="navbar-item" to="/Galerija/Brodovi">
              Brodovi
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activator: false
    }
  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
  }
}
</script>

<style>
 /* removing gray background from logo on small screens */
  #logolink{
    background-color: white;
  }
  #navBar{
    padding-right: 40px;
  }
  @media only screen and (max-width: 1024px){
    /* setting navbar right with absolute position and on top */
      #navBar {
        width: 200px;
        position: absolute;
        z-index: 10;
        right: 0;
        padding-right: 0px;
      }
      .navbar-divider {
        display: block;
        margin: 0;
      }
}
</style>
