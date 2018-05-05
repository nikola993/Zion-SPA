<template>
  <div id="gallery-container">
    <h1 class="label" id="galleryHead" v-text="Text" v-scroll-reveal.reset></h1>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex" v-scroll-reveal.reset
      @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
export default {
  data () {
    return {
      id: this.$route.params.id,
      Text: 'Naslov',
      imgStolovi: [],
      imgBrodovi: [],
      imgStolice: [],
      images: [
        '/static/Galery/ostalo1.jpg',
        '/static/Galery/ostalo2.jpg',
        '/static/Galery/ostalo3.jpg',
        '/static/Galery/ostalo4.jpg',
        '/static/Galery/ostalo5.jpg',
        '/static/Galery/ostalo6.jpg',
        '/static/Galery/ostalo7.jpg',
        '/static/Galery/ostalo8.jpg',
        '/static/Galery/sto1.jpg',
        '/static/Galery/sto2.jpg',
        '/static/Galery/sto3.jpg'
      ],
      index: null
    }
  },

  metaInfo: {
    titleTemplate: 'Zion - Izrada namestaja i predmeta od drveta',
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/Logo/logo.png' }
    ],
    meta: [
      { name: 'description', content: 'Galerija slika gde se mogu naci razlicite vrste namestaja i ostalih predmeta od drveta' }
    ]
  },

  components: {
    'gallery': VueGallery
  },

  methods: {
    loadImg () {
      this.Text = 'Galerija'
      this.images = this.images
      /*  switch (this.id) {
        case 'Stolovi':
          this.Text = this.id
          this.images = this.imgStolovi
          break
        case 'Brodovi':
          this.Text = this.id
          this.images = this.imgBrodovi
          break
        case 'Stolice':
          this.Text = this.id
          this.images = this.imgStolice
          break
      } */
    }
  },

  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadImg()
    }
  },

  created () {
    this.loadImg()
  }
}
</script>

<style>
  .image{
    width: 300px;
    height: 200px;
    display: inline-block;
    background-size: cover;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  #galleryHead{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 24px;
  }
</style>
