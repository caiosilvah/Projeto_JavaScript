//Um professor quer imprimir as notas de um aluno.( usando ForEach)

let notas = [8.5, 7.0, 9.2, 6.8, 10.0];

notas.forEach(function(nota, indice) {
  console.log(`Nota ${indice + 1}: ${nota}`);
});
