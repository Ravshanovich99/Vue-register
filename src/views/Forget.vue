<template>
 <div class="card" v-if="correctLogin && correctPassword">
    <h4 class="primary">Evetything is correct!</h4>
    Your login is: <i>{{correctLogin}}</i><br>
    Your password is: <i>{{correctPassword}}</i>
  </div>
  <div class="danger card" v-if="inCorrect">
    {{inCorrect}}
  </div>
  <form class="card" @submit.prevent="checkUser">
    <h2>Forgot Password?</h2>
    <h3>Don't worry we will help you!</h3>
    <div class="form-control" :class="this.$store.state.errors.firstNameError ? 'invalid' : ''">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="Enter your first name" v-model.trim="this.$store.state.firstName">
      <small>{{this.$store.state.errors.firstNameError}}</small>
    </div>
    <div class="form-control" :class="this.$store.state.errors.lastNameError ? 'invalid' : ''">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" placeholder="Enter your last name" v-model.trim="this.$store.state.lastName">
      <small>{{this.$store.state.errors.lastNameError}}</small>
    </div>
    <div class="form-control" :class="this.$store.state.errors.emailError ? 'invalid' : ''">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" v-model.trim="this.$store.state.email">
      <small>{{this.$store.state.errors.emailError}}</small>
    </div>
    <button type="submit" class="btn primary">Check</button>
    <h4>Already have an account? <a href="#" @click="$router.push('/login')">Back to Login</a></h4>
  </form>
 
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      users: [],
      correctLogin: '',
      correctPassword: '',
      inCorrect: ''
    }
  },
  methods:{
    async checkUser(){
      if(this.$store.getters.forgetFormChecker){
        const {data} = await axios.get('https://vue-register-ebec5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
        this.users = Object.keys(data)
        this.users = this.users.map(elem => {
          return {
            userLogin: data[elem].userLogin,
            userPassword: data[elem].userPassword,
            userFirstName: data[elem].userFirstName,
            userLastName: data[elem].userLastName,
            userEmail: data[elem].userEmail,
          }
        })
        this.users.every(elem => {
          if(elem.userFirstName == this.$store.state.firstName && elem.userLastName == this.$store.state.lastName && elem.userEmail == this.$store.state.email){
            this.correctLogin = elem.userLogin
            this.correctPassword = elem.userPassword
            this.inCorrect = null
            return false
          }
          else{
            this.inCorrect = 'Unfortunately you entered invalid informations. Please try again'
            this.correctLogin = null
            this.correctPassword = null
          }
          return true
        })
      }
      
    }
  }
}
</script>