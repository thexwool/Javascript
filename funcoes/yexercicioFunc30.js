/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/
let numeros = [54, 645, 456, 0, 8946, -89, 1680]

function menorMaior(valores){
    valores.sort((a, b) => a < b ? 1 : -1)
    let maior = valores[0]
    let menor = valores[valores.length - 1]

    return `O maior é ${maior} e o menor é ${menor}`
}

function menorMaiorPercorrendo(valores){
    let maior
    let menor

    for(let i = 0; i < valores.length; i++){
        if (maior === undefined && menor === undefined){
            maior = valores[i]
            menor = valores[i]
        } else {
            if (valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }
    }

    return `O maior é ${maior} e o menor é ${menor}`
}

console.log(menorMaior(numeros))
console.log(menorMaiorPercorrendo(numeros))