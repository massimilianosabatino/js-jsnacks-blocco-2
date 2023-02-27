// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//Creo array nomi e cognomi
const nomi = ['mario', 'marco', 'andrea', 'filippo', 'luca'];
const cognomi = ['altobelli', 'rossi', 'volvera', 'picasso', 'tippete'];
const fakeList = [];

//variabili di servizio
let nomeRandom;
let cognomeRandom;
let numeroNomeRandom;
let numeroCognomeRandom;
//ciclo per generare false identità


for (let i = 0; i < 3; i++) {
    numeroNomeRandom = Math.floor(Math.random() * nomi.length);
    numeroCognomeRandom = Math.floor(Math.random() * nomi.length);
    nomeRandom = nomi[numeroNomeRandom];
    cognomeRandom = cognomi[numeroCognomeRandom];
    fakeList.push(`${nomeRandom} ${cognomeRandom}`);
}

console.log(fakeList);