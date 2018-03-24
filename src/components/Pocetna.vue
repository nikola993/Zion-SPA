<template>
  <div>
    <div id="po">
      <h1 class="label">Dobrodosli u Zion</h1>

      <p class="label">Mesto na kojem mozete naci najkvalitetniju uslugu izrade namestaja.</p>
    </div>

    <p>Rucna izrada i pazljiv odabir materjala daju poseban pecat svakom nasem proizvodu,
      i cine ga jedinstvenim i prepoznatljivim.</p>

    <p>Pored velikog izbora svih vrsta namestaja, postoji i mogucnost izrade bilo
      kog komada namestaja po Vasem ukusu i merama.</p>

    <p>Trudimo se da zadovoljimo sve Vase zelje i zahteve, pa tako brinemo da i cene budu vrlo pristupacne.</p>

    <p>Vi imate ideju, a mi smo tu da je sprovedemo u delo!</p>
    <kontakt></kontakt>
  </div>
</template>

<script>
import Kontakt from './Kontakt.vue'
export default {
  components: {
    'kontakt': Kontakt
  },
  name: 'Pocetna',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>
  #po{
    background-image: url("../assets/bgTop.jpg");
    background-size: cover;
    height: 300px;
  }
  #po .label {
    color: whitesmoke;
  }
</style>
