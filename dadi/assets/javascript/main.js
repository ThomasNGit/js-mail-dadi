// Gioco dei dadi, chi fa di più vince;

// dichiarazione delle variabili
var user1, user2, number1, number2, calcolo;

// chiediamo il nome ai partecipanti

user1 = prompt("Come ti chiami, giocatore 1?")


user2 = prompt("E tu come ti chiami, giocatore 2")


// facciamo scegliere a due user due numeri
number1 = prompt(user1 + ", scegli un numero!")


number2 = prompt("Ora tocca a te scegliere, " + user2)



// facciamo fare il calcolo randomico al pc
calcolo = Math.floor(Math.random() *6) + 1;

document.getElementById("mioid").innerHTML = "Il risultato del dado è: " + calcolo + "."


// stampa a schermo dell'utente vincitore
if (number1 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user1 + "!";

} else if (number2 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user2 + "!";

}else {

  document.getElementById("annuncio").innerHTML = "Non ha vinto nessuno";

}
