//Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}