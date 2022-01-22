/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicar(int1, int2){
    int1 = Math.abs(int1)
    int2 = Math.abs(int2)
    let resultado = 0

    for(let i = 0; i < int2; i++){
        resultado += int1
    }
    return resultado
}

function multiplicarRecursivo(int1, int2) {
    if (int1 === 0 || int2 === 0){
        return 0
    }
    return int2 === 1 ? int1 : int1 + multiplicar(int1, int2-1)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(7, 0))
console.log(multiplicar(2, -3))
console.log()
console.log(multiplicarRecursivo(5, 5))
console.log(multiplicarRecursivo(0, 7))
console.log(multiplicarRecursivo(7, 0))
