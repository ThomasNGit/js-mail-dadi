// Gioco dei dadi, chi fa di più vince;

// dichiarazione delle variabili
var user1, user2, number1, number2, calcolo;

// chiediamo il nome ai partecipanti

user1 = prompt("Come ti chiami, giocatore 1?")


user2 = prompt("E tu come ti chiami, giocatore 2")


// facciamo scegliere a due user due numeri

// scelta user 1 e stampa a schermo
number1 = prompt(user1 + ", scegli un numero!")

document.getElementById("scelta1").innerHTML = user1 + " hai scelto il numero: " + number1


// scelta user 2 e stampa a schermo
number2 = prompt("Ora tocca a te scegliere, " + user2)

document.getElementById("scelta2").innerHTML = user2 + " hai scelto il numero: " + number2


// facciamo fare il calcolo randomico al pc
calcolo = Math.floor(Math.random() * 6) + 1;

document.getElementById("calcolopc").innerHTML = "Il risultato del dado è: " + calcolo + "."


// inserite le immagini del risultato del dado
if (calcolo == 1){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado1.png'>"

}if (calcolo == 2){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado2.png'>"

}if (calcolo == 3){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado3.png'>"

}if (calcolo == 4){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado4.png'>"

}if (calcolo == 5){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado5.png'>"

}if (calcolo == 6){

  document.getElementById("dadoimg").innerHTML = "<img src='assets/img/dado6.png'>"

}


// stampa a schermo dell'utente vincitore
if (number1 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user1 + "!";

} else if (number2 == calcolo){

  document.getElementById("annuncio").innerHTML = "Hai vinto tu, " + user2 + "!";

}else {

  document.getElementById("annuncio").innerHTML = "Non ha vinto nessuno";

}
