//Crie um sistema que permita cadastrar nomes. Antes de adicionar,verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se não estiver, adicione o usuário.
//lista => array

let listaNomes = [];

function cadastrarNome(nome) {
    // Converter o nome digitado para letras minúsculas
    let nomeMinusculo = nome.toLowerCase();
  
    // Verificar se já existe um nome igual (ignorando maiúsculas)
    let jaExiste = listaNomes.some(n => n.toLowerCase() === nomeMinusculo);
  
    // Se não existe, adiciona; senão, avisa
    if (!jaExiste) {
      listaNomes.push(nome);
      console.log(`Nome "${nome}" cadastrado com sucesso!`);
    } else {
      console.log(`O nome "${nome}" já está na lista.`);
    }
  }
  



