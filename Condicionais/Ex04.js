//Verificar se uma senha digitada está correta

let prompt = require('prompt-sync')();
let senhaCorreta = "1234";
let senhaDigitada = prompt("Digite a senha: ");

if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso permitido.");
} else {
    console.log("Senha incorreta! Acesso negado.");
}
