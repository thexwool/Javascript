// pessoa -> endereço de memoria -> { objeto }
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Allan'

console.log(pessoa)

/* pessoa = { nome = 'Ana' } -> Erro, pois está 
tentando fazer com que o objeto pessoa aponte para um novo endereço
*/

Object.freeze(pessoa) // Impede qualquer tipo de modificações no objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)