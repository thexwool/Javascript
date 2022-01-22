Array.prototype.simulandoMap = function(funcaoCallback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(funcaoCallback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = jsonObject => JSON.parse(jsonObject)
const apenasPreco = produto => produto.preco

const resultado = carrinho.simulandoMap(paraObjeto).simulandoMap(apenasPreco)
console.log(resultado)