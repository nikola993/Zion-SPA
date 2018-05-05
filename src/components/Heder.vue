<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" id="logolink" to="/pocetna">
        <img src= "/static/Logo/z-splash.png" alt="Zion: Izrada namestaja" title="Zion">
      </router-link>
      <div @click="makeBurger" class="navbar-burger burger" data-target="navBar" v-bind:class="{ 'is-active': activator }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navBar" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
      <div class="navbar-end">
        <div @click="makeBurger" class="navbar-item">
          <router-link to="/pocetna" class="navbar-item">
            Pocetna
          </router-link>
        </div>
        <!-- obrisi ovu galeriju za opcije -->
        <div @click="makeBurger" class="navbar-item">
          <router-link to="/galerija" class="navbar-item">
            Galerija
          </router-link>
        </div>
        <!--
        <div class="navbar-item has-dropdown is-hoverable" @click="gallery">
          <a class="navbar-item">
            Galerija
          </a>
          <hr class="navbar-divider">
          <div class="navbar-dropdown is-boxed" v-bind:class="{ 'active': activate }">
            <div @click="makeBurger" class="navbar-item">
              <router-link to="/Galerija/Stolovi" class="navbar-item">
                Stolovi
              </router-link>
            </div>
            <div @click="makeBurger" class="navbar-item">
              <router-link to="/Galerija/Stolice" class="navbar-item">
                Stolice
              </router-link>
            </div>
            <div @click="makeBurger" class="navbar-item">
              <router-link to="/Galerija/Brodovi" class="navbar-item">
                Brodovi
              </router-link>
            </div>
          </div>
        </div>
        <hr class="navbar-divider">
        -->
        <div @click="makeBurger" class="navbar-item">
          <router-link to="/kontakt" class="navbar-item">
            Kontakt
          </router-link>
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
      activator: false,
      activate: true
    }
  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    },
    gallery () {
      this.activate = !this.activate
      return this.activate
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
  a.navbar-item.is-active{
    background-color: white;
  }
  @media screen and (max-width: 1025px){
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
      .active{
        display: none;
      }
}
</style>
