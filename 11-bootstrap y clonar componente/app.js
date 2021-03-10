const router = new VueRouter ({
    base: "11-bootstrap y clonar componente",
    routes: [
        {
            path: '/list_person',
            component: ListsPerson
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
 
});
