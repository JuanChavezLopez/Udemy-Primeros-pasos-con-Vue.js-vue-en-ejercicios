
Vue.component('img-post', {
    template: '<img  style="width:600px;" :src="imgPost()" :alt="title" :title="title">',
    props: {
        url: String
    },
    data: function() {
        return {
            title: "titulo de la img"
        }
    }, 
    methods: {
        imgPost() {
            if(this.url != ""){
                return this.url;
            }
            return "https://www.ecestaticos.com/image/clipping/90db3034e449ee2be1be9e64f285527b/como-se-construyo-la-gran-piramide-de-guiza-el-misterio-por-fin-desvelado.jpg";
        }
    }
})