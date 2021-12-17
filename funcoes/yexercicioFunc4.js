/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const dividindo = function(dividendo, divisor){
    console.log(`${dividendo} / ${divisor} = ${Math.floor(dividendo / divisor)}, resto = ${dividendo % divisor}`)
}

dividindo(2, 3)
dividindo(2, 5)
dividindo(6, 2)
dividindo(7, 3)
dividindo(11, 4)
dividindo(2000, 3000)