const router = new VueRouter ({
    base: "10_routes_y_componentes",
    routes: [
        {
            path: '/lists',
            component: Lists
        }
    ]
});

new Vue({
    router,
    el:'#app',
 
});
