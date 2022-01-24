/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

const somarNumeros = function(arrayParam){
    let resultado = []
    resultado = arrayParam.reduce(soma)

    return console.log(resultado)
}

const soma = (anterior, proximo) => anterior + proximo

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])