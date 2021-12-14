function soma(){
    let soma = 0
    // Com ForIn
    for(let i in arguments){
        soma += arguments[i]
    }
    /* Com For normal
    for(let i=0; i < arguments.length; i++){
        soma += arguments[i]
    }*/
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 3))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))