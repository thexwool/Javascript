/*
Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(valor){
    let resultado = 1 

    if(valor != 1){
        resultado = valor * (valor - 1)
        valor = valor - 2
    }

    while(valor >= 1){
        resultado *= valor
        valor--
    }

    return resultado
}

function fatorialRecursivo(valor){
    if(valor == 0){
        return 1
    }else{
        return valor * fatorialRecursivo(valor - 1)
    }
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log()

console.log(fatorialRecursivo(1))
console.log(fatorialRecursivo(2))
console.log(fatorialRecursivo(3))
console.log(fatorialRecursivo(4))
console.log(fatorialRecursivo(5))
console.log(fatorialRecursivo(6))
console.log(fatorialRecursivo(7))