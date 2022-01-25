// Tagged template - processar o template dentro de uma função
function log(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(log `${aluno} está ${situacao}`)