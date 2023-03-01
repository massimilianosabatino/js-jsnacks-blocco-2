'use strict';

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let userNumber  = 0;
let sumNumber = 0;

//Ciclo FOR
// for (let i = 0; i < 5; i++) {
//     userNumber = Number(prompt('Inserisci un numero da sommare'));
//     sumNumber += userNumber;
    
// }

// console.log(sumNumber);

//Ciclo WHILE
let count = 0;
while (count < 5) {
    userNumber = Number(prompt('Inserisci un numero da sommare'));
    // sumNumber += userNumber;
    // count++;

    //Condizione per verifica se inserito è numero
    if (!isNaN(userNumber)) {
        sumNumber += userNumber;
        count++;
    }
}

console.log(sumNumber);