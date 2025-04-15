//Um sistema de controle de presença precisa listar os alunos que compareceram à aula.(usando ForEach)

let alunosPresentes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

alunosPresentes.forEach((aluno, indice) => {
  console.log(`Aluno ${indice + 1}: ${aluno} - Presente`);
});
