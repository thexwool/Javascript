/* 
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

const aumentoSalario = function(plano, salario){
    switch(plano){
        case 'A':
            return (salario * 1.10).toFixed(2)
        case 'B':
            return (salario * 1.15).toFixed(2)
        case 'C':
            return (salario * 1.20).toFixed(2)
        default:
            return 'Plano Inválido'
    }
}

console.log(aumentoSalario('A', 1000.00))
console.log(aumentoSalario('B', 1000.00))
console.log(aumentoSalario('C', 1000.00))
console.log(aumentoSalario('Y', 1000.00))
console.log(aumentoSalario('a', 1000.00))
