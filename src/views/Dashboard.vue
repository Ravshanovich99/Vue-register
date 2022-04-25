<template>
    <div class="card">
      <h3>Welcome, {{this.$store.state.whoLogged.userFirstName}} {{this.$store.state.whoLogged.userLastName}}</h3>
      <h3 v-if="this.$store.state.whoLogged.userLastName.includes('birjonov')">You are the best teacher ever. Thank you for all knowledges that you gave us!</h3>
      <h3 v-if="this.$store.state.whoLogged.userFirstName.includes('ustam')">You are best #coder ever!</h3>
      <h3 v-if="this.$store.state.whoLogged.userFirstName.includes('adina')">You are World Wide Best #coder</h3>
    </div>
  <div class="card">
    <h1>Main section</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste id quasi reprehenderit dicta. Animi non qui error facere aliquam perferendis quasi. Sit quidem recusandae delectus blanditiis. Culpa, pariatur velit.</p>
    <router-link to="mail">Mail</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>