const app = Vue.createApp({})
.component('plan',{
    template:'#plan-template',
    props:['name']
})
.mount('#app')