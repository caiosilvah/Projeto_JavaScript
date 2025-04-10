//Contar de 1 a 10(Use o While)

var prompt = require('prompt-sync')();

let num = Number(prompt ("Contagem.."));

do {
    if (num <= 10) {
        console.log("Número atual é: " + numero);
        numero = numero + 1;
    }else {
      
        num--;
    }
} while (num > 0);