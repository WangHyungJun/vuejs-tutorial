var one=new Vue({
   el: "#vue-app-one",
   data: {
       title: 'view-app-one',
   },
   methods:{

   },
   computed:{
       greet: function () {
           return 'Hello from app one:)';
       }
   }
});

var two=new Vue({
    el: "#vue-app-two",
    data: {
        title: 'view-app-two',
    },
    methods:{
        changeTitle: function () {
            one.title="Title Changedddddd!!";
        }
    },
    computed:{
        greet: function () {
            return 'Hey Dudes; this is app 2 speaking to ya :)';
        }
    }
});

two.title="changed from the outside";