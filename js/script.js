const {createApp} = Vue;

const app = createApp({
    data(){
        return{
           greeting: "ciao utente, questa é una foto di un lago di notte con la luna",
           imgSrc:"https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg",
        };
    },
    methods: {
       
    },
})

app.mount("#app");