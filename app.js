let PlanComponent={

    template:'#plan-template',
    props:{
        name: {type:String,required:true},
        price: Number
    }
}


const app = Vue.createApp({
   
})

.component('plan-picker',{
    components:{
        plan:PlanComponent
    },
    template:'#plan-picker-template',
    data() {
        return {
            plans:['The Single','The Curious','The Addict']
        }
    },
   
})
.mount('#app')