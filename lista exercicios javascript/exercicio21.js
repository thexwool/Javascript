/*
Criar uma função que receba um array de números e retorne o menor número desse array.

Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

function menorNumero1(numeros){
    let menor = numeros[0]
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }

    return console.log(menor)
}

function menorNumero2(numeros) {
    return console.log(numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual))
}

function menorNumero3(numeros) {
    return console.log(Math.min(...numeros))
}

menorNumero1([10, 5, 35, 65]) // retornará 5
menorNumero1([5, -15, 50, 3]) // retornará -15

menorNumero2([10, 5, 35, 65]) // retornará 5
menorNumero2([5, -15, 50, 3]) // retornará -15

menorNumero3([10, 5, 35, 65]) // retornará 5
menorNumero3([5, -15, 50, 3]) // retornará -15