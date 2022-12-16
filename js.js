Vue.createApp({
    data: () =>({
        inputValue:'',
        ArrV:["Заметка 1", "Заметка 2"],
        twi: 4,
    }),
    methods:{
        AddNew: function(inputValue){
            if(inputValue) {
                return this.ArrV.push(inputValue);
            }
        },
        Remove: function (index){
            return this.ArrV.splice(index,1);
        },
    },
    computed:{
        Two(){
            return this.twi = this.ArrV.length *2;
        },
    },
}).mount('#qwq')