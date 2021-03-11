const router = new VueRouter ({
    base: "11-bootstrap y clonar componente",
    routes: [
        {
            path: '/lists_person',
            component: ListsPerson
            // redirect: '/lists_programing'
        },
        {
            path: '/lists_programing',
            component: ListsPrograming
        }
    ]
});

new Vue({
    router,
    el:'#app',
    mounted () {
        console.log(this.$route)
    }
 
});
