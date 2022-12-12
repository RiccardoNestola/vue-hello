const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Vue test',
            image: '/img/vuejs.jpg'

        }
        }
    }).mount('#app')