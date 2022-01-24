/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

Exemplos:
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
*/

function sorteador(numero){
    const min = 1
    const max = 10
    let valorSorteado = Math.floor(Math.random() * (max - min + 1) + min)
    let resultado = valorSorteado === numero ? true : false

    if(resultado){
        return console.log(`Parabéns! O número sorteado foi o ${valorSorteado}}`)
    }else{
        return console.log(`Que pena! O número sorteado foi o ${valorSorteado}}`)
    }
}

sorteador(10)
sorteador(5)
sorteador(5)