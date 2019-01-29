<template>
  <div>
    <h1>List of Ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
  </div>
</template>

<style scoped>
  h1{
    color: green;
  }
</style>

<script>
  export default {
    data () {
      return {
        ninjas: ["형준", "기홍", "린범"]
      }
    }
  }
</script>
