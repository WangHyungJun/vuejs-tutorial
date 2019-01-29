new Vue({
    el: "#vue-app",
    data: {
        'name': "왕형준",
        'job': 'student',
        'age': 25,
        'website': 'http:yig.website',
        'websiteTag': '<a href="http:yig.website">Tag</a>',
        'x': 0,
        'y': 0,
    },
    methods:{
        add:function(inc){
            this.age+=inc;
        },
        subtract: function (dec) {
            this.age-=dec;
        },
        updateXY: function(event){
          this.x=event.offsetX;
          this.y=event.offsetY;
        },
        click: function () {
            alert("Did you click me?");
        }
    }
});