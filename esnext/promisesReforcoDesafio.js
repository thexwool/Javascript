const fs = require('fs')
const path = require('path')


function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){ // Assincrono
            resolve(conteudo.toString())
        })
        console.log('Teste') // Sincrono
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O resultado final foi: ${conteudo}.`)
    .then(console.log)