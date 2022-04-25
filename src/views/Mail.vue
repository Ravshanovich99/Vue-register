<template>
<div class="card"><h3>You did not recieve mails yet.</h3></div>
<div class="card-main card" :class="closeAd ? 'closed' : ''">
  <h2 class="primary">Ads</h2>
  <div class="card no-padding">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" :key="email.id">
          <router-link :to="'/mail/' + email.id">
            {{email.theme}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <router-view></router-view>
    </div>
  </div>
  <button class="btn" @click="closeAd = true">close</button>
</div>  
</template>

<script>
import AppEmailBody from '../components/AppEmailBody'

export default {
  data(){
    return{
      closeAd: false,
    }
  },
  // components: {AppEmailBody},  // $route.params.id shu ozida nma saqlidi, 'params' - nima?
  inject: ['emails'],
  components: {
    AppEmailBody
  },
}
</script>

<style scoped>
  .btn{
    align-self: flex-end;
  }
  .card-main{
    display: flex;
    flex-direction: column;
    transition: 0.2s;
  }
  .card-main.closed{
    opacity: 0;
  }
  .card {
    display: flex;
  }

  .card.no-padding {
    padding: 0;
  }

  .card-nav {
    max-width: 300px;
    border-right: 1px solid #999999;
  }

  .card-body {
    padding: 0 1rem;
  }

  .list-item {
    padding: .5rem;
    cursor: pointer;
  }

  .list-item a {
    color: #2d502c;
  }

  .list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
  }
</style>