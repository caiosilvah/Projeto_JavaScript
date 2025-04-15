//Crie um array de objetos com produtos e preços. Exiba no console o nome e o preço com R$ formatado.

let produtos = [
    { nome: "Caneta", preco: 2.5 },
    { nome: "Caderno", preco: 15.0 }
  ];

  produtos.forEach(produto => {
    let precoFormatado = produto.preco.toFixed(2).replace('.', ',');
    console.log(`${produto.nome} - R$${precoFormatado}`);
  });
  
  

