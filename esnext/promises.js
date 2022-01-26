function falarDepoisDe(segundos, frase1, frase2){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase1) // o resolve só aceita um parametro
            reject(frase2)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!', 'Negado')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))