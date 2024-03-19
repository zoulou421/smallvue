const app = Vue.createApp({
    data() {
        return {
            plans:['The Single','The Curious','The Addict']
        }
    },
})
.component('plan',{
    template:'#plan-template',
    props:{
        name: {type:String, default:"Default Value",required:true},
        price: Number
    }
})
.mount('#app')