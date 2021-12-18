/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/
const valores = [54, 89, 20, 10, 8]

function mediaAritmetica(vetor){
    let somatorio = 0
    for(let i in vetor){
        somatorio += vetor[i]
    }

    return `A média aritmética dos valores do vetor é igual a ${(somatorio / vetor.length).toFixed(2)}.`
}

console.log(mediaAritmetica(valores))