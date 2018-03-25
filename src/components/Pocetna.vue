<template>
  <div>
    <div id="welcome">
      <section v-scroll-reveal.reset>
        <h1 class="label">Dobrodosli u Zion</h1>
      </section>
      <section v-scroll-reveal.reset="{ delay: 350 }">
      <p class="label" id="dobrodosli">Mesto na kojem mozete naci najkvalitetniju uslugu izrade namestaja</p>
      </section>
    </div>
    <div id="content">
      <div id="upper-div-text">
        <p id="upper-text" v-scroll-reveal.reset="{ delay: 350 }">
          Rucna izrada i pazljiv odabir materjala daju poseban pecat svakom nasem proizvodu,
          i cine ga jedinstvenim i prepoznatljivim
        </p>
      </div>
      <div id="upper-img">
      </div>
      <div id="bottom-div-text">
        <section id="bottom-text" v-scroll-reveal.reset="{ delay: 350 }">
        <p>Pored velikog izbora svih vrsta namestaja, postoji i mogucnost izrade bilo
        kog komada namestaja po Vasem ukusu i merama</p>
        </section>
      </div>
      <div id="bottom-img">
      </div>
      <div style="clear:both;"></div>
    </div>
    <section v-scroll-reveal.reset="{ delay: 350 }">
    <div id="last-text">
      <p>Trudimo se da zadovoljimo sve Vase zelje i zahteve, pa tako brinemo da i cene budu vrlo pristupacne</p>
      <p>Vi imate ideju, a mi smo tu da je sprovedemo u delo!</p>
    </div>
    </section>
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
  #welcome{
    background-image: url("../assets/bgTop.jpg");
    background-size: cover;
    height: 300px;
  }
  #welcome .label {
    color: whitesmoke;
  }
  h1.label{
    font-size: 3rem;
    padding: 60px 0 30px 0;
  }
  #dobrodosli.label{
    padding: 0 30px 0 30px;
  }
  #upper-div-text{
    height: 300px;
    text-align: center;
    width: 50%;
    display: table;
    float: left;
  }
  #upper-text{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  #upper-img{
    background-image: url("../assets/wood-types.png");
    background-size:cover;
    height: 300px;
    padding: 0 30px 0 30px;
    width: 50%;
    float: right;
  }
  #bottom-div-text{
    height: 300px;
    text-align: center;
    width: 50%;
    display: table;
    float: right;
  }
  #bottom-text{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    }
  #bottom-img{
    height: 300px;
    background-color: black;
    width: 50%;
    float: left;
  }
  #last-text{
    padding: 130px 3% 130px 3%
  }
  @media screen and (max-width: 1024px){

  }
</style>
