// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//Creo array nomi e cognomi
const nomi = ['mario', 'marco', 'andrea', 'filippo', 'luca'];
const cognomi = ['altobelli', 'rossi', 'volvera', 'picasso', 'tippete'];

//variabili di servizio
let nomeCognome;
let nomeRandom = '';
let numeroRandom;
//ciclo per generare false identità

for (let i = 0; i < 4; i++) {
    numeroRandom = Math.floor(Math.random() * nomi.length);
    nomeRandom = nomi[numeroRandom];
    console.log(nomeRandom);
}