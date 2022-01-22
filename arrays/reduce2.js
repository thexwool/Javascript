const alunos = [
    { Nome: 'João', nota: 7.3, bolsista: false },
    { Nome: 'Maria', nota: 9.2, bolsista: true },
    { Nome: 'Pedro', nota: 9.8, bolsista: false },
    { Nome: 'Ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(aluno => aluno.bolsista))
console.log()

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))