// .length => tamanho 

// let frutas = ["Maca", "Carambola", "Morango", "Abacaxi", "Melancia", "Uva", "Kiwi", "Jabuticaba", "Seriguela", "Embu", "Uva"];
// console.log serve para imprimir 
// console.log(frutas.length)

// ----------------------------------------------------------------------------------------------------------------------------------

// //.reverse() -> reverte o nosso array
// let numeros = [70, 100, 120, 1000];

// numeros.reverse();

// console.log(numeros);

// --------------------------------------------------------------------------------------------------------------------------------

// let nomes = ["Edson", "Valdemir", "Anna", "Jurandir"];

// //.push() => Adiciona algo no final
// nomes.push("Matheus")

// //.unshift() => Adiciona algo no inicio
// nomes.unshift("Sophia");

// //.pop() => Remover algo do final,  no caso o nome "Matheus"
// nomes.pop();


// //.shift() => Remove no inicio 
// nomes.shift();

// //.splice => Adiciona ou remove elementos do array
// console.log(nomes.splice(2,1));

// console.log(nomes);

// --------------------------------------------------------------------------------------------------------------------------------

// let nomesAnimais = ["Julie", "Meg", "Mel", "Kyara", "Lola", "Sol"];

// //.includes() => Se existe no array, se existir ele retornara true
// console.log(nomesAnimais.includes("Bob"));

// --------------------------------------------------------------------------------------------------------------------------------

// let valores = [30, 55, 90, 66];

// //Quero os valores maiores que 50:

// let maiores = valores.filter(num => num > 50);

// console.log(maiores);

// --------------------------------------------------------------------------------------------------------------------------------

// //.map() => Definicao: Metodo usado em arrays que permite tranformar os elementos do array original em novos valore, criando um novo array, sem modificar o original.

// //Lista de nomes de alunos e suas notas
// let alunos = [
//     {nome: "Clara", nota: 8},
//     {nome: "Laura", nota: 9},
//     {nome: "Caio", nota: 10},
//     {nome: "Fabio", nota: 7},
//     {nome: "Sillas", nota: 8},
//     {nome: "Isaac", nota: 5},
//     {nome: "Richard", nota: 5},
//     {nome: "Bryan", nota: 8},
// ];
// //Lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);

//     //OU

// //Funcao:
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// });

// let alunoNota = alunos.map(aluno => aluno.nota);

// console.log(alunoNomes);
//console.log(alunoNomesDois);

// // 2. Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// //Ola Caio
// //Ola Dani

// let mensagem = nomes.map(itemDoArrayNomes => `Ola, ${itemDoArrayNomes}`);

// //OU 

// // let mensagem2 = nomes.map(itemDoArrayNomes => "Ola, " + itemDoArrayNomes);

// console.log(mensagem);
//-----------------------------------------------------------------------------------------------------------------------------------------------
// // 3. Pegar apenas os primeiros caracteres de nomes (as primeiras letras)

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicialNomes = nomes.map(element => element[0]);

// console.log(inicialNomes);
//------------------------------------------------------------------------------------------------------------------------------------------
// 4. kaue@gmail.com, pedro@hotmail.com, julia@outlook.com

let emails = ["kaue@gmail.com", "pedro@hotmail.com", "julia @ outlook.com"];

let dominios = emails.map(element => element.split("@")[1]);

console.log(dominios);

