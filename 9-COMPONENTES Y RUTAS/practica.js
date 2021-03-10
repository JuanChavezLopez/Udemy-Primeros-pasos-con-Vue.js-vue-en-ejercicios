const Foo = { template: '<div>plantilla foo</div>' }
const Bar = { template: '<div>plantilla bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    el:'#app',
    router,
    data : {
        numero: 60,
        message: '',
        p_error: true
    },
    computed: {
        // reverseMessage: function() {
        //     return this.message.split('').reverse().join('');
        // }
    },
    methods: {
        calculateSum(value1, value2) {
            return value1 + value2;
        },
        incrementar: function() {
            this.numero++
        },
        decrementar: function() {
            this.numero--
        }
    },
    watch: {
        message: function(val) {
            console.log("watch:" +val);
        }
    }
});
