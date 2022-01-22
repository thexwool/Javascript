/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

const simboloMais = function(num){
    let resultado = ''
    for(let i = 0; i < num; i++){
        resultado += "+"
    }
    return resultado
}

function simboloMais2(num) {
    return Array(num).fill('+').join('')
}

console.log(simboloMais(2))
console.log(simboloMais(4))
console.log()
console.log(simboloMais2(2))
console.log(simboloMais2(4))