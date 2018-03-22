<template>
  <nav class="nav has-shadow">
    <div class="container" id="nav">
      <router-link class="nav-item is-tab" to="/Pocetna">
        <label class="label"> Pocetna </label>
      </router-link>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <div class="nav-item is-tab" aria-haspopup="true" aria-controls="dropdown-menu4">
            <label class="label"> Galerija </label>
          </div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <router-link class="nav-item is-tab" to="/Galerija/Stolice">
                <label class="label"> Solice </label>
              </router-link>
              <router-link class="nav-item is-tab" to="/Galerija/Stolovi">
                <label class="label">Stolovi</label>
              </router-link>
              <router-link class="nav-item is-tab" to="/Galerija/Brodovi">
                <label class="label"> Brodovi </label>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <router-link class="nav-item is-tab" to="/Kontakt">
        <label class="label"> Kontakt </label>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
  .nav.has-shadow {
    width: 100%;
    align-content: center;
  }
  .container#nav {
    width: 70%;
    justify-content: space-evenly;
  }
  .dropdown-content {
    float: left;
  }
  .nav-item.is-tab {
    height: 100%;
  }
</style>
