const { createApp } = Vue

const app = createApp({
    data() {
        return {
            elencoMail: []
        }
    },
    methods: {
        recoveryMail() {
            // effettuo una richiesta axios al server per ricevere un dato esterno 
            // e da un server esterno. Nello specifico ricevo una lista email.
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

            // questa funzione parte quando axios riceve la risposta dal server
            // la risposta è contenuta nell'argomento della funzione che nello specifico chiamiamo - response.
            .then((response)=>{
            
            // verifico il contenuto della risposta e verifico il corretto funzionamento del tutto. 
            console.log(response);

            // aggiungo anche il response.data per verificare il contenuto 
            // e/o il valore globale di quello quello che il server ha inviato come risposta
            console.log(response.data);

            // se voglio prendere esattamente solo il valore che il server mi 
            // comunica devo usare il consol.log(), e nell'argomento specificate 
            // il percorso (argomento.data.response)
            console.log( "il valore comunicato dal server è : "  + response.data.response );

            // qui pusho il risultato del "response" di sopra, 
            // dentro un array vuoto dove salvare i datati
            // e precedentemente già creato nel data.
            // --IMPORTANTISSIMO -- se vogliomo accedere a questo this. e riferilo a Vue dobbiamo usare
            // una arrow function quando scriviamo il ".then(function(reponse){}) in .then((response)=>{})"
            // per la risposta; avendo iol return automatico altrimenti non fuonzionerà mai perchè il this 
            // si riferirà sempre a window. 
            this.elencoMail.push(response.data.response)

            });
        },

    },
    mounted(){
    // qui devo invocate la funzione - recoveryMail per farla funzionare
    this.recoveryMail()

    },
}).mount('#app')