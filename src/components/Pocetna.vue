<template>
  <div>
    <div id="po">
      <h1>Dobrodosli u Zion</h1>
    </div>
    <p>Mesto na kojem mozete naci najkvalitetniju uslugu izrade namestaja.</p>

    <p>Rucna izrada i pazljiv odabir materjala daju poseban pecat svakom nasem proizvodu,
      i cine ga jedinstvenim i prepoznatljivim.</p>

    <p>Pored velikog izbora svih vrsta namestaja, postoji i mogucnost izrade bilo
      kod komada namestaja po Vasem ukusu i merama.</p>

    <p>Trudimo se da zadovoljimo sve Vase zelje i zahteve, pa tako brinemo da i cne budu vrlo pristupacne.</p>

    <p>Vi imate ideju, a mi smo tu da je sprovedemo u delo!</p>
  </div>
</template>

<script>
export default {
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
    background-image: url("../assets/bgTop.jpg")
  }
</style>
