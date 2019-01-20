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
    const imagePath = '/static/Galery/'
    const imageExtention = '.jpg'
    return {
      id: this.$route.params.id,
      Text: 'Naslov',
      imgStolovi: [],
      imgBrodovi: [],
      imgStolice: [],
      images: [
        imagePath + '1' + imageExtention,
        imagePath + '2' + imageExtention,
        imagePath + '3' + imageExtention,
        imagePath + '4' + imageExtention,
        imagePath + '5' + imageExtention,
        imagePath + '6' + imageExtention,
        imagePath + '7' + imageExtention,
        imagePath + '8' + imageExtention,
        imagePath + '9' + imageExtention,
        imagePath + '10' + imageExtention,
        imagePath + '11' + imageExtention,
        imagePath + '12' + imageExtention,
        imagePath + '13' + imageExtention,
        imagePath + '14' + imageExtention,
        imagePath + '15' + imageExtention,
        imagePath + '16' + imageExtention,
        imagePath + '17' + imageExtention,
        imagePath + '18' + imageExtention,
        imagePath + '19' + imageExtention,
        imagePath + '20' + imageExtention,
        imagePath + '21' + imageExtention,
        imagePath + '22' + imageExtention,
        imagePath + '23' + imageExtention,
        imagePath + '24' + imageExtention,
        imagePath + '25' + imageExtention,
        imagePath + '26' + imageExtention,
        imagePath + '27' + imageExtention,
        imagePath + '28' + imageExtention,
        imagePath + '29' + imageExtention,
        imagePath + '30' + imageExtention,
        imagePath + '31' + imageExtention,
        imagePath + '32' + imageExtention,
        imagePath + '33' + imageExtention,
        imagePath + '34' + imageExtention,
        imagePath + '35' + imageExtention,
        imagePath + '36' + imageExtention,
        imagePath + '37' + imageExtention,
        imagePath + '38' + imageExtention,
        imagePath + '39' + imageExtention,
        imagePath + '40' + imageExtention,
        imagePath + '41' + imageExtention,
        imagePath + '42' + imageExtention,
        imagePath + '43' + imageExtention,
        imagePath + '44' + imageExtention,
        imagePath + '45' + imageExtention,
        imagePath + '46' + imageExtention
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
