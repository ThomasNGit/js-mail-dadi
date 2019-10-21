// Gioco dei dadi, chi fa di più vince;


// chiediamo il nome ai partecipanti

var user1 = prompt("Come ti chiami, giocatore 1?")

console.log(user1);

var user2 = prompt("E tu come ti chiami, giocatore 2")

console.log(user2);

// facciamo scegliere a due user due numeri
var number1 = prompt(user1 + ", scegli un numero!")

console.log(number1);

var number2 = prompt("Ora tocca a te scegliere, " + user2)

console.log(number2);


// facciamo fare il calcolo randomico al pc
var calcolo = Math.floor(Math.random() *6) + 1;

document.getElementById("mioid").innerHTML = "Il risultato del dado è: " + calcolo

console.log(calcolo);



// stampa a schermo dell'utente vincitore
if (number1 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user1 + "!";

} else if (number2 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user2 + "!";

}else {

  document.getElementById("annuncio").innerHTML = "Non ha vinto nessuno";

}
