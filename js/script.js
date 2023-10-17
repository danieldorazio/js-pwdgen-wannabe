// PRONT NOME
const nome = prompt("Inserire nome");
// PRONT COGNOME
const cognome = prompt("Inserire cognome");
// PRONT COLORE
const colore = prompt("Inserire colore");

console.log(nome, cognome, colore);


// CREAZIONE PASSWORD
const password = `${nome}${cognome}${colore}21`;
console.log(password);


// STAMPA
document.getElementById("password").innerHTML = password;
