// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;


// dichiarazione delle variabili
var nome, usermail, invitati, invitato;

// prompt che chiede il nome all'utente
nome = prompt("Qual è il tuo nome?")

// prompt per chiedere all'utente il suo indirizzo email
usermail = prompt("Qual è il tuo indirizzo email?")



// creazione array con lista email degli invitati
invitati = ["mail1", "mail2", "mail3"];

// variabile appoggio per vedere se sei stato invitato
invitato = false


// creazione del ciclo per stabilire se la mail è presente nella lista degli invitati
for (var i = 0; i < invitati.length; i++) {

  if (usermail == invitati[i]){

    invitato = true;

  }

}


if (invitato == true){

  document.getElementById("mioid").innerHTML = "Il tuo nome è sulla lista, " + nome + ". Sei tra gli invitati. Buon divertimento alla festa!";

} else {

  document.getElementById("mioid").innerHTML = "Il tuo nome non è sulla lista, " + nome + ", non provarci nemmeno a imbucarti!";

}
