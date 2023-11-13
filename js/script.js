const {createApp} = Vue;

const app = createApp({
    data(){
        return{
           greeting: "ciao utente",
        };
    },
    methods: {
       
    },
})

app.mount("#app");