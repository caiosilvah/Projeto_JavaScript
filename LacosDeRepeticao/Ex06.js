//Solicitar idade até uma válida (>= 0) (Use o do...While)

var prompt = require('prompt-sync')();

let idade; 

do {
    idade = prompt("Digite sua idade (deve ser maior ou igual a 0):");
    idade = parseInt(idade); 

   
    if (idade < 0) {
        console.log("Idade inválida! Tente novamente.");
    }
} while (idade < 0); 

console.log("Idade válida: " + idade);
