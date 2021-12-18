/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

const inteiros = [54, 645, 456, 0, 8946, -89, 1680, -984, 5656, -1]

function numerosNegativos(valoresInteiros){
    let qtdNegativos = 0

    for(let i in valoresInteiros){
        if(valoresInteiros[i] < 0){
            qtdNegativos++
        }
    }

    return `Existem ${qtdNegativos} números negativos.`
}

console.log(numerosNegativos(inteiros))