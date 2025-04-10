//Dia da semana por número(Switch case)

var prompt = require('prompt-sync') ();


let dia = Number (prompt("Digite um numero do dia da semana"));

switch(dia){
    case 1:
        console.log("O dia escolhido foi: Domingo");
    break;
    case 2:
        console.log("O dia escolhido foi: Segunda");
    break;
    case 3:
        console.log("O dia escolhido foi: Terca");
    break;
    case 4:
        console.log("O dia escolhido foi: Quarta");
    break;
    case 5:
        console.log("O dia escolhido foi: Quinta");
    break;
    case 6:
        console.log("O dia escolhido foi: Sexta");
    break;
    case 7:
        console.log("O dia escolhido foi: Sabado");
    break;

    default:
        console.log("Dado invalido!");
}