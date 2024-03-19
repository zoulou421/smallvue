let PlanComponent={

    template:'#plan-template',
    props:{
        name: {type:String,required:true},
        price: Number
    }
}

let PlanpickerComponent={
    components:{
        plan:PlanComponent
    },
    template:'#plan-picker-template',
    data() {
        return {
            plans:['The Single','The Curious','The Addict']
        }
    },
   
}
const app = Vue.createApp({
   components:{
    'plan-picker':PlanpickerComponent
   }
})
.mount('#app')