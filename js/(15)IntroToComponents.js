var data={
  name: "Kamile"
};

Vue.component('greeting',{
    template: '<p>Hi there, I am {{name}}. <button v-on:click="changeName">Naming</button></p>',
    data: function () {
        return data
    },
    methods: {
      changeName: function () {
          this.name="HyungJun"
      }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});