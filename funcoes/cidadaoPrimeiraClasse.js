// Função em JS é First-Class Object ( Citizen )
// Higher-order function

// criar de forma literal
function fun1(){ }

// Armazenar em uma variável
const fun2 = function(){ return 1+1 }
console.log(`O resultado é ${fun2()}`)
console.log(`O resultado é ${fun2}`)

// Armazenar em um array
const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa' }
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}
run(function(){ console.log('Executando...') })

// Um função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4) //forma burra

const cincoMais = soma(2, 3) //forma eficiente
cincoMais(4) //forma eficiente