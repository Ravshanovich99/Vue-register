<template>
  <the-navbar :visible="this.$store.state.auth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import Login from './views/Login'

export default {
  components: {TheNavbar, Login},
  methods:{
    logIn(){
      this.$store.state.auth = true
      if(this.$route.query.page){
        this.$router.push(this.$route.query.page)
      }else{
        this.$router.push('/dashboard')
      }
    },
    logOut(){
      this.$store.state.auth = false
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      })
    },
  },
  provide() {
    return {
      login: this.logIn,
      logout: this.logOut,
      emails: [
        {id: 1, theme: 'To\'liq Front-End kursi'},
        {id: 2, theme: 'To\'liq Back-End kursi'},
        {id: 3, theme: 'Python dasturlash tili'},
        {id: 4, theme: 'JavaScript dasturlash tili'},
        {id: 5, theme: 'VueJS frameworki'}
      ],
    }
  }
}
</script>

<style>
</style>
