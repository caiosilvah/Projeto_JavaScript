//Verificar senha com tentativa até acertar(Use o While)

var prompt = require('prompt-sync')();

let senhaCorreta = "1234";

let tentativa = "";

while (tentativa !== senhaCorreta) {
    
    tentativa = prompt("Digite a senha:");

    if (tentativa === senhaCorreta) {
        console.log("Senha correta! Bem-vindo!");
    } else {
        console.log("Senha incorreta! Tente novamente.");
    }
}
