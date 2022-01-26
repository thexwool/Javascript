let promessa = new Promise(function(resolve, reject){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = elemento => elemento[0]
const primeiraLetra = letra => letra[0]
const letraMinuscula = minuscula => minuscula.toLowerCase()

promessa.then(primeiroElemento)
        .then(primeiraLetra)
        .then(letraMinuscula)
        .then(console.log)