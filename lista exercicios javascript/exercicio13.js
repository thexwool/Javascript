/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

const array1 = ["Javascript", 1, "3", "Web", 20]
const array2 = ["a", "c"]

const filtrarNumeros = elemento => typeof elemento === 'number'

let resultado1 = array1.filter(filtrarNumeros)
let resultado2 = array2.filter(filtrarNumeros)

console.log(resultado1)
console.log(resultado2)