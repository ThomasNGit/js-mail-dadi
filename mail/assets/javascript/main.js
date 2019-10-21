// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// prompt per chiedere all'utente il suo indirizzo email
var usermail = prompt("Qual è il tuo indirizzo email?")

console.log(usermail);


// creazione array con lista email degli invitati
var invitati = ["mail1", "mail2", "mail3"]

console.log(invitati);

// creazione del ciclo per stabilire se la mail è presente nella lista degli invitati
for (var i = 0; i < invitati.length; i++) {

  if (usermail != invitati[i]){

  document.getElementById('mioid').inneHTML = usermail;


} else {

  document.getElementById('mioid').inneHTML = usermail;

}

}
