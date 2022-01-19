// O ForEach por padrão envia 3 parametros: 1- elemento, 2- indice, 3- o proprio array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`[${indice + 1}] ${nome}`)
})
console.log()

aprovados.forEach(i => console.log(i))
console.log()

const exibirAprovados = (i, j) => console.log(`[${j + 1}] ${i}`)
aprovados.forEach(exibirAprovados)
console.log()