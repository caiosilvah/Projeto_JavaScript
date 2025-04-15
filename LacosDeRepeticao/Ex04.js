//Contar de 1 a 5 com do...while

var prompt = require('prompt-sync')();
  
let i = 1;

do {
    console.log(i); // mostra o valor de i no console
    i++;            // aumenta o valor de i em 1
} while (i <= 5);   // repete enquanto i for menor ou igual a 5