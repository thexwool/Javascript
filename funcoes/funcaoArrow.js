let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return implicíto
console.log(dobro(Math.PI))

/*let ola = function(){
    return 'Olá'
}*/

ola = () => 'Olá'
console.log(ola())