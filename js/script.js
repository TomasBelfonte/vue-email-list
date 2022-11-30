const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: ''
        }
    },
    methods: {
        recoveryMail() {
            // effettuo una richiesta axios al server per ricevere un dato esterno 
            // e da un server esterno. Nello specifico ricevo una lista email.
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            // questa funzione parte quando axios riceve la risposta dal server
            .then(function(response){
            // la risposta è contenuta nell'argomento della funzione che nello specifico chiamiamo - response.

            // verifico il contenuto della risposta e verifico il corretto funzionamento del tutto. 
            console.log(response);
            });
        },

    },
    mounted(){
    // qui devo invocate la funzione - recoveriMail per farla funzionare
    this.recoveryMail()

    },
}).mount('#app')