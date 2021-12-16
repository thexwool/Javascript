/*
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const numeroElevado = function(base, expoente){
    return Math.pow(base, expoente)
}

const numeroElevadoNovoMetodo = function(base, expoente){
    return base ** expoente
}

console.log(numeroElevado(7, 2))
console.log(numeroElevado(7, 3))
console.log(numeroElevado(2, 10))
console.log()

console.log(numeroElevadoNovoMetodo(7, 2))
console.log(numeroElevadoNovoMetodo(7, 3))
console.log(numeroElevadoNovoMetodo(2, 10))
