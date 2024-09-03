// TODO: primo utilizzo di vue

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello vue, nice to meet you',
            imageUrl: 'https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg'
        }
    }
}).mount('#app')
