/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function verificaNum(inteiro){
    if(inteiro % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNum(3))
console.log(verificaNum(2))
console.log(verificaNum(150))