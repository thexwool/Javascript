function funcionaOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Error 404')
        }else{
            resolve(valor)
        }
    })
}

funcionaOuNao('Sucesso', 0.50)
    .then(v => console.log(`Resultado: ${v}`))
    .catch(e => console.log(`Resultado: ${e}`))