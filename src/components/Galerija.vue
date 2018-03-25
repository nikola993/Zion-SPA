<template>
  <div>
    <label class="label" id="galeryHead" v-text="Text"></label>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex"
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
      imgStolovi: [ 'https://dummyimage.com/800/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000',
        '../assets/z.jpg',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff' ],
      imgBrodovi: [ 'https://dummyimage.com/1600/ffffff/000000',
        'https://dummyimage.com/1280/000000/ffffff' ],
      imgStolice: [ 'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff' ],
      images: [],
      index: null
    }
  },

  components: {
    'gallery': VueGallery
  },

  methods: {
    loadImg () {
      switch (this.id) {
        case 'Stolovi':
          this.images = this.imgStolovi
          break
        case 'Brodovi':
          this.images = this.imgBrodovi
          break
        case 'Stolice':
          this.images = this.imgStolice
          break
      }
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
    float: left;
    background-size: cover;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  #galeryHead{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 24px;
  }
</style>
