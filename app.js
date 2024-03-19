let PlanComponent={

    template:'#plan-template',
    props:{
        name: {type:String,required:true},
        selected:{type:Boolean,default:false}
    },
    data(){
        return{
            selected:false
        }
    },
    methods: {
        select(){
            this.$emit('select',this.name)
        },
    
    },
}


let PlanpickerComponent={
    components:{
        plan:PlanComponent
    },
    template:'#plan-picker-template',
    data() {
        return {
            plans:['The Single','The Curious','The Addict'],
            selectPlan:null
        }
    },
    methods:{
        selectPlan(plan){
         this.selectPlan=plan
        }
    }

   
}
const app = Vue.createApp({
   components:{
    PlanPicker:PlanpickerComponent
   }
})
.mount('#app')