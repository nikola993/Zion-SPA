<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <label class="label"> Pratite nas </label>
        <a href="https://www.facebook.com/ZION-Namestaj-430950967343208/?modal=admin_todo_tour" target="facebook">
          <img :src= faceImage alt="facebook logo">
        </a>
        <a href="http://google.com" target="instagram">
          <img :src= instaImage alt="instagram logo">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      faceImage: '/static/Logo/face.png',
      instaImage: '/static/Logo/insta.png'
    }
  }
}
</script>

<style>
  .footer {
    background-color: whitesmoke;
    display: inline-block;
    width: 100%;
    padding: 100px 0 100px 0;
  }
  img {
    height: 40px;
    margin: 5px
  }
</style>
