/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const num = 2

function func1(vet, n){
    resultado = []
    for(let x in vet){
        resultado.push(vet[x] * n)
    }

    return resultado
}

function func2(vet, n){
    resultado = []
    for(let x in vet){
        if(vet[x] > 5){
            resultado.push(vet[x] * n)
        }
    }

    return resultado
}

console.log('Resultado ' + func1(vetor, num))
console.log('Resultado ' + func2(vetor, num))