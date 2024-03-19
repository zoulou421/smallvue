const app = Vue.createApp({

})

.component('click-counter1',{
    template:`<button @click="count++">{{count}}</button>`,
    data() {
        return {
            count:0
        }
    },

})
.component('click-count',{
    template:'#click-count-template',
    data() {
        return {
            count:0
        }
    },

})
.mount('#app')