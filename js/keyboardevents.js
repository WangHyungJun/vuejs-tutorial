new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: "",
    },
    methods:{
        logName:function () {
            console.log("You entered name");
        },
        logAge:function () {
            console.log("You entered age");
        },
    }
});