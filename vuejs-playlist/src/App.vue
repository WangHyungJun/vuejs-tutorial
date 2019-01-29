<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<style scoped>
  h1{
    color: red;
  }
</style>

<script>
  import Ninjas from './Ninjas.vue'

export default {
  components:{
    'ninjas': Ninjas
  },
  data () {
    return {
      title: "Ninja App"
    }
  }
}
</script>
