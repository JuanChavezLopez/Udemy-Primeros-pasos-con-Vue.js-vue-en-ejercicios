new Vue({
    el:'#app',
    data : {
        message: 'Hello world',
        sum: 3+6,
        value: 2,
        isVisible: false,
        filtro_edad: 18,
        people: ['Andres', 'Juan', 'Pepe', 'Maria'],
        CopyArrayObjets:[],
        ArrayObjetos: [
            {name: "Andres", surname:"Cruz", age:28},
            {name: "Juan", surname:"Flores", age:27},
            {name: "Andres", surname:"Cruz", age:24},
            {name: "Elena", surname:"Chavez", age:29},
            {name: "Pepe", surname:"Cruz", age:21},
            {name: "Andres", surname:"Cruz", age:28}
        ],
        insertHtml: '<p>Juan Amazing</p>',
        src: 'https://www.ecestaticos.com/image/clipping/90db3034e449ee2be1be9e64f285527b/como-se-construyo-la-gran-piramide-de-guiza-el-misterio-por-fin-desvelado.jpg',
        alt: 'Descripcion de la imagen'
    },
    created: function() {
        this.CopyArrayObjets= this.ArrayObjetos;
    },
    computed: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        filterPeopleObjets: function() {
            this.ArrayObjetos= this.CopyArrayObjets;
            this.ArrayObjetos = this.ArrayObjetos.filter(
                person => {
                    return person.age >= this.filtro_edad
                }
            )
        },
        filterPeople: function() {
            this.people = this.people.filter(person => {
                return person.length >= 5
            })
        },
        calculateSum(value1, value2) {
            return value1 + value2;
        }
    }
});
