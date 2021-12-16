/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoesBasicas(x, y){
    console.log(`X + Y = ${x + y}\nX - Y = ${x - y}\nX * Y = ${x * y}\nX / Y = ${(x / y).toFixed(2)}`)
}

operacoesBasicas(2, 3)