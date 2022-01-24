const nomes = ['Ana', 'Lucas', 'João']
const saudacoes1 = require('./passandoParametros')(nomes)
const saudacoes2 = require('./passandoParametros')(nomes[0], nomes[1], nomes[2])

console.log(saudacoes1)
console.log(saudacoes2)