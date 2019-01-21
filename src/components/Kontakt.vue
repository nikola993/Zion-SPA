<template>
<div class="contact">
  <h1 class="label"></h1>
  <div class="contact info" v-scroll-reveal.reset>
    <label class="label" id="contact_text">Marko Aksentijević</label>
    <label class="label" id="contact_text">Broj telefona: 064/2930426</label>
    <label class="label" id="contact_text">E-mail adresa: zion.namestaj.1404@gmail.com</label>
  </div>
  <form id="contact_form" v-on:submit.prevent="submitForm" v-scroll-reveal.reset="{ delay: 350 }">
    <div class="form-group">
      <label class="label" for="name">Ime i prezime:</label>
      <!-- v-model link to the model (i.e. pieces of the data section of vue.js) -->
      <!-- v-on lets us run methods from vue.js : this one is v-on:blur for the blur event -->
      <!--    blur just means that the field no longer has 'focus' -->
      <input v-model="name" v-on:blur="isValidName" autocomplete="name" class="input" name="name" type="text" />
    </div>
    <div class="form-group">
      <label class="label" for="email">Email:</label>
      <input v-model="email" v-on:blur="isValidEmail" class="input" autocomplete="email" name="email" type="email" />
    </div>
    <div class="form-group">
      <label class="label" for="message">Poruka:</label>
      <textarea v-model="message" v-on:blur="isValidMessage" class="textarea" name="message"></textarea>
    </div>
    <button type="submit" id="button-send" class="button is-primary">Posalji</button>
</form>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '', // data for the name on the form
      email: '', // data for the email on the form
      message: '', // data for the message on the form
      maxLength: 550 // maximum length of the form message
    }
  },
  methods: { // all the actions our app can do
    isValidName: function () { // TODO what if name is just spaces?
      return this.name.length > 0
    },
    isValidEmail: function () { // TODO is a@b a valid email?
      return this.email.indexOf('@') > 0
    },
    isValidMessage: function () { // what is message is just spaces?
      return (this.message.length > 0) &&
        (this.message.length < this.maxLength)
    },
    checkMessage: function () {
      // TODO keep the message below maxMessageLength?
      //      or maybe change the text, background, or counter color?
      return this.message.indexOf('@') > 0
    },
    submitForm: function () {
      // TODO prevent form from submitting if name, email, or message
      //      are invalid and display message
      // TODO submit to form processor
      if (this.isValidName() && this.isValidEmail() && this.isValidMessage()) {
        const contact = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        this.$http.post('/send', contact)
          .then((res) => alert(res.body))
          .catch(() => alert('Poruka nije poslata'))
      }
    }
  },
  metaInfo: {
    titleTemplate: 'Zion - Izrada namestaja i predmeta od drveta',
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/Logo/logo.png' }
    ],
    meta: [
      { name: 'description', content: 'Kontak stranica za bilo kakvu vrstu komunikacije slanjem poruke preko forme ili preko kontakt telefona i mail-a' }
    ]
  }
}
</script>

<style>
  #contact_form {
    width: 50%;
    margin-top: 30px;
    margin-left: 25%;
  }
  .contact {
    align-content: center;
    margin-bottom: 40px;
    margin-top: 100px;
  }
  .contact.info{
    margin-top: 40px;
  }
  #contact_text{
    text-align: center;
    margin-top: 5px;
  }
  #button-send{
    margin: 10px;
  }
  .button.is-primary{
    background-color: black;
    width: 100px;
  }
</style>
