const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            userColor: "",
            greeting: "",
            imgSrc:"",
            colorClass:"",
        };
    },
    methods: {
        isBlueViolet: function(){
            if(this.userColor === "blu"){
                //Aggiungo il testo 
                this.greeting = "Dato che preferisci il blu, ecco un'immagine che potrebbe piacerti" ;
                //aggiungo l'immagine inerente al colore
                this.imgSrc = "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg";
                //aggiungo la classe del colore inserito
                this.colorClass= "blue";
            }else if(this.userColor === "viola"){
                //Aggiungo il testo 
                this.greeting = "Dato che preferisci il viola, ecco un'immagine che potrebbe piacerti" ;
                //aggiungo l'immagine inerente al colore
                this.imgSrc = "https://img.freepik.com/free-photo/digital-lavender-natural-landscape_23-2150538378.jpg";
                //aggiungo la classe del colore inserito
                this.colorClass= "purple";
            }else if(this.userColor === "rosso"){
                //Aggiungo il testo 
                this.greeting = "Dato che preferisci il rosso, ecco un'immagine che potrebbe piacerti" ;
                //aggiungo l'immagine inerente al colore
                this.imgSrc = "https://i.pinimg.com/736x/98/f1/8d/98f18d59f84ef8ba64b30e3f37be8593.jpg";
                //aggiungo la classe del colore inserito
                this.colorClass= "red";
            }
        }
    },
})

app.mount("#app");