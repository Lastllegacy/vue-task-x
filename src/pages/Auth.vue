<template>
  <h1 class="header">LeadHit</h1>
  <form novalidate>
    <label for="site-id">Введите ID сайта</label>
    <input type="text" id="site-id" class="my-input" :value="textId" @input="updateValue">
    <span class="error">{{error}}</span>
    <button @click="checkId" class="my-button">Войти</button>
  </form>

</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      textId: "",
      error: ""
    }
  },
  methods: {
    updateValue(e) {
      this.textId = e.target.value;
      this.error = ""
    },

    async httpRequest (url) {
      const params = { headers: {'Api-Key': "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo", "Leadhit-Site-Id": this.textId}}
      const response = await axios.get(url,params);
      return response.data
    },

    toAnalytics() {
      this.httpRequest('https://track-api.leadhit.io/client/test_auth')
      .then(response => {
          if(response.message == 'ok') {
            this.$store.commit('changeId',this.textId);
            localStorage['leadhit-site-id'] = this.textId;
            this.$router.push('/analytics');
          } 
        })
      .catch(e => {
          console.log(e)
          this.error = "Неправильный ID"
      })
    },

    checkId(e) {
      e.preventDefault();
      if(this.textId.length != 24) {
        return this.error = "ID должен содержать 24 символа"
      }

      return this.toAnalytics()
    },

  }
}


</script>

<style lang="scss">
.header {
  text-align: center;
  margin: 15px;
}

label {
  font-size: 20px;
}

.my-input{
   width: 100%;
   margin-top: 4px;
   padding: 10px 15px;
   background: #FFFEFB;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   &::placeholder {
      font-family: 'Source Sans Pro';
   }
}

.my-button {
  margin-top: 10px;
  padding: 5px;
  font-size: 18px;
  color: white;
  background-color: rgb(91, 23, 0);
  border: 0;
  cursor: pointer;
  box-shadow: 2px 2px 2px black;
  width: 120px;
  position: relative;
  border-radius: 5px;
  &:active {
    top: 3px;
    box-shadow: 2px 2px 2px white;
  }
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
  border: 2px solid teal;
  margin: 30px auto;
  padding: 15px;
}

.error {
  color: rgb(223, 5, 5);
  margin: 3px;
}

</style>
