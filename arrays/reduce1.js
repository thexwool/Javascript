// Diferentemente das outras funções, o reduce recebe um quarto
// parametro, acumulador, que é o primeiro parametro retornado

const alunos = [
    { Nome: 'João', nota: 7.3, bolsista: false },
    { Nome: 'Maria', nota: 9.2, bolsista: true },
    { Nome: 'Pedro', nota: 9.8, bolsista: false },
    { Nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(aluno => aluno.nota))

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)
