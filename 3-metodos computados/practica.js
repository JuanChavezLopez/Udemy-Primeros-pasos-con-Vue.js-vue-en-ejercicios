new Vue({
    el:'#app',
    data : {
        message: 'Hello world',
        sum: 3+6,
        value: 5
    
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
