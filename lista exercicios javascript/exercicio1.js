/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.

Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

function cumprimentar(nome){
    return `Olá, ${nome}!`
}

function cumprimentar2(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
    }

console.log(cumprimentar("Leonardo"))
console.log(cumprimentar("Maria"))

console.log(cumprimentar2("Leonardo"))
console.log(cumprimentar2("Maria"))