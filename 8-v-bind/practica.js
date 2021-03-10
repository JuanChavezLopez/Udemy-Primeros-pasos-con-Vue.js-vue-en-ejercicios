new Vue({
    el:'#app',
    data : {
        // message: 'Hello world',
        // sum: 3+6,
        // value: 2,
        // isVisible: false,
        // people: ['Andres', 'Juan', 'Pepe', 'Maria'],
        // insertHtml: '<p>Juan Amazing</p>',
        // src: 'https://www.ecestaticos.com/image/clipping/90db3034e449ee2be1be9e64f285527b/como-se-construyo-la-gran-piramide-de-guiza-el-misterio-por-fin-desvelado.jpg',
        // alt: 'Descripcion de la imagen',
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
