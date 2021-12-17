/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

let inteiros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let inteiros2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
let inteiros3 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let inteiros4 = [8, 9, 4, 3, 1, 12, 95, 62, 12, 0]
let inteiros5 = [66, 72, 90, 95, 04, 09, 22]

function verificaNumeros(inteiros){
    let pares = 0
    let impares = 0
    
    for(let i in inteiros){
        if(inteiros[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }

    return console.log(`O array possuí ${pares} número(s) par(es) e ${impares} número(s) ímpar(es).`)
}

verificaNumeros(inteiros1)
verificaNumeros(inteiros2)
verificaNumeros(inteiros3)
verificaNumeros(inteiros4)
verificaNumeros(inteiros5)