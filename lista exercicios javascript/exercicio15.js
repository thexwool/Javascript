/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.

💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
2 é zero.

Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

function paresIndicesPares(arrayNums){
    resultado = []

    for(let i in arrayNums){
        if(i % 2 == 0 && arrayNums[i] % 2 == 0){
            resultado.push(arrayNums[i])
        }
    }
    return console.log(resultado)
}

paresIndicesPares([1, 2, 3, 4])
paresIndicesPares([10, 70, 22, 43])