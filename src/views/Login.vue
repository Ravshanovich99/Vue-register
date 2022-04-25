<template>
  <form class="card" @submit.prevent="submit">
    <h2>Gmail</h2>
    <div class="form-control" :class="this.$store.state.errors.loginError ? 'invalid' : ''">
      <label for="email">Login</label>
      <input type="text" id="email" v-model.trim="this.$store.state.login" />
      <small>{{ this.$store.state.errors.loginError }}</small>
    </div>

    <div class="form-control" :class="this.$store.state.errors.passwordError ? 'invalid' : ''">
      <label for="password">Parol</label>
      <input :type="this.passwordShow ? 'password' : 'text'" id="password" v-model="this.$store.state.password" />
      <i class="fa-solid" @click="this.passwordShow = ! this.passwordShow" :class="this.passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i>
      <small>{{ this.$store.state.errors.passwordError }}</small>
    </div>
    <h4 class="danger">{{this.$store.state.errors.loginPasswordInvalid}}</h4>

    <button class="btn primary" type="submit">Enter</button>
    <router-link to="/register">
      <button class="btn primary">Register</button>
    </router-link>
    <router-link to="/forget">
      <a href="#">Forget password?</a>
    </router-link>
    
    </form>
</template>

<script>
export default {
  data() {
    return {
      passwordShow: true,
    };
  },

  mounted(){
    this.$store.dispatch('asnycGetData')
  },

  methods: {
      submit(){
      if(this.$store.getters.loginFormChecker){
        let isData = true
        this.$store.state.users.every(elem => {
          console.log(elem.userLogin == this.$store.state.login);
          if(this.$store.state.login == elem.userLogin && this.$store.state.password == elem.userPassword){
            this.login();
            isData = false
            this.$store.state.errors.loginPasswordInvalid = null
            this.$store.state.whoLogged = elem
            return isData
          }
          return isData
        })
        if(isData) {
          this.$store.state.errors.loginPasswordInvalid = 'Unfortunately login or password is invalid. Please, check again'
        }
      }
      
    },
  },

  inject:['login',]
};
</script>

<style scoped>
.password{
  position: relative;
}
.fa-solid{
  position: absolute;
  right: 10px;
  top: 35px;
  transition: 0.2s;
}

.fa-solid:hover{
  color: #42b983;
}
</style>