<template>
  <div v-if="getEmail">
    <h2>{{getEmail.theme}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">Yopish</button>
  </div>
  <div v-else>
    <h3>Choose one of these sections on the left and get information about it</h3>
  </div>
</template>

<script>
export default {
  props:['mailId'],
  inject:['emails'],
  computed:{
    getEmail(){
      return this.emails.find(elem => elem.id == this.mailId)
    }
  }
}
</script>

<style scoped>

</style>