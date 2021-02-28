const App = {
    data(){
        return {
            name: 'Kush'
        }
    }
}

Vue.createApp(App).mount('#app')

Vue.createApp({
    data(){
        return {
            name: 'Blah'
        }
    }
}).mount('#oneMoreApp')