

/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
Buon lavoro e buon divertimento! */



var nomeUtente = prompt("inserisci il tuo cognome");


var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
console.log(listaCognomi);



   for (var i = 0; i < listaCognomi.length; i++){
      
       listaCognomi.push(nomeUtente);

       console.log(i)
   }