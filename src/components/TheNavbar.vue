<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard"><a>Main</a></router-link></li>
      <li>
        <router-link to="/mail"><a>Mails</a></router-link>
      </li>
      <li><a href="#" @click="logout">Exit</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject:['logout'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
