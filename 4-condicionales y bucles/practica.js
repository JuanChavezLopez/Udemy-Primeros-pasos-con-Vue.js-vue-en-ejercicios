new Vue({
    el:'#app',
    data : {
        message: 'Hello world',
        sum: 3+6,
        value: 2,
        isVisible: false,
        people: ['Andres', 'Juan', 'Pepe', 'Maria'],
        insertHtml: '<p>Juan Amazing</p>'
    },
    computed: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        calculateSum(value1, value2) {
            return value1 + value2;
        }
    }
});
