//Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();

let mes = Number (prompt("Digite um numerode 1 a 12 para saber o mes:"));

switch(mes){
    case 1:
        console.log("O mes escolhido foi: Janeiro");
    break;
    case 2:
        console.log("O mes escolhido foi: Fevereiro");
    break;
    case 3:
        console.log("O mes escolhido foi: Marco");
    break;
    case 4:
        console.log("O mes escolhido foi: Abril");
    break;
    case 5:
        console.log("O mes escolhido foi: Maio");
    break;
    case 6:
        console.log("O mes escolhido foi: Junho");
    break;
    case 7:
        console.log("O mes escolhido foi: Julho");
    break;
    case 8:
        console.log("O mes escolhido foi: Agosto");
    break;
    case 9:
        console.log("O mes escolhido foi: Setembro");
    break;
    case 10:
        console.log("O mes escolhido foi: Outubro");
    break;
    case 11:
        console.log("O mes escolhido foi: Novembro");
    break;
    case 12:
        console.log("O mes escolhido foi: Dezembro");
    break;

    default:
        console.log("Dado Número inválido! Digite um valor entre 1 e 12.!");
}