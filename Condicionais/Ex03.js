//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite um numero:"));

if(numero % 2 == 0){
    console.log("O numero e par")
}else if(numero & 2 ==1){
    console.log("O numero e impar")
}else{
    console.log("numero invalido")
}