<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
  import {bus} from '../main';

  export default {
    props:{
      title:{
        type: String
      }
    },
    data () {
      return {
        title: "Vue Ninjas"
      }
    },
    methods:{
      changeTitle: function () {
        //emit의 첫번째: event를 뭣이라고 부를래? 두 번째: 어떤 데이터를 보낼래?
        //this.$emit('changeTitle', 'Vue Wizards');
        this.title="vue Wizards";
        bus.$emit('titleChanged', 'vue Wizards');
      }
    }
  }
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
