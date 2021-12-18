/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

const notas1 = [0.0, 4.9, 3.0, 5.0, 5.5, 6.9, 7.0, 8.1, 8.9, 9.0, 9.5, 10.0]
const notas2 = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

function conceituarNotas(notas) {
    let conceitos = []

    for(let i = 0; i < notas.length; i++) {
        if(notas[i] >= 0 && notas[i] <= 4.9){
            conceitos.push('D')
        }else if(notas[i] >= 5 && notas[i] <= 6.9) {
            conceitos.push('C')            
        }else if(notas[i] >= 7 && notas[i] <= 8.9) {
            conceitos.push('B')
        }else if(notas[i] >= 9 && notas[i] <= 10){
            conceitos.push('A')
        }else{
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

console.log('Conceitos: ' + conceituarNotas(notas1))
console.log('Conceitos: ' + conceituarNotas(notas2))