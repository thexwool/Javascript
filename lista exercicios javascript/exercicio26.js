/*
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.

Exemplos:
Resoluções - Exercícios - Curso Fundamentos de Programação 13
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function removerVogais(palavra){
    let resultado = palavra.replace(/[AEIOUaeiou]/g, "")
    return console.log(resultado)
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
removerVogais("Allan da Silva Moreira")