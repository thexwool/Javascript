function getPreco(nome, imposto = 0, moeda = 'R$'){
    return `${this.nome} - ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589, 
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
global.nome = 'Nenhum'

console.log(getPreco())
console.log(produto.getPreco())
console.log()

const carro = { nome: 'Tijolo Supreme', preco: 49990, desc: 0.2 }
console.log(getPreco.call(carro))
console.log(getPreco.call(produto))
console.log()

console.log(getPreco.call(carro, 'Vazio', 0.17, '$'))
console.log(getPreco.apply(carro, ['Vazio', 0.17, '$']))