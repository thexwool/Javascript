const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copa de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copa de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(prod){
    return false
}))

const caro = produto => produto.preco >= 500
const fragilidade = produto => produto.fragil

resultado = produtos.filter(caro).filter(fragilidade)
console.log(produtos)
console.log(resultado)
