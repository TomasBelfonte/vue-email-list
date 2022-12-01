const { createApp } = Vue

const app = createApp({
    data() {
        return {
            elencoMail: [],
            tempElencoMail: [],
            counter: 0,
        }
    },
    methods: {
        recoveryMail() {
            // effettuo una richiesta Axios al server per ricevere un dato esterno 
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
            // ATTENZIONE - qui i dati vengono salvati in un array vuoto temporaneo
            // per evitare di vederli stampati uno alla volta, per poi
            // essere stampati tuti insieme una volta passati nell'array definitivo. 
            // this.elencoMail.push(response.data.response);

            this.tempElencoMail.push(response.data.response);

            // qui passo i dati dall'array temporaneo a quello standard definitivo una volta finita 
            // la verifica del numero delle mail come richieste nella funzione di dopo recoveryMultiMail
            if (this.tempElencoMail.length === 10 ) {
                this.elencoMail = this.tempElencoMail;
            };

            });
        },

    recoveryMultiMail() {
        this.counter = 10;

        for (let i = 0; i < 10; i++) {
            this.recoveryMail();
            
            this.counter--;
        }
    }

    },
    
}).mount('#app')