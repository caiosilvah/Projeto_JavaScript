//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

let numero = Number(prompt("Ola, digite um numero:"))

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}