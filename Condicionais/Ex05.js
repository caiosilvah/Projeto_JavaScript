//Verificar se um aluno foi aprovado

let prompt = require('prompt-sync')();

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

if (media >= 5) {
    console.log("Aluno aprovado com média: ");
} else {
    console.log("Aluno reprovado com média: ");
}

