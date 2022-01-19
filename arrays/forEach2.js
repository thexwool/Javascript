Array.prototype.simulandoForEach = function(funcaoCallback){
    for(let i = 0; i < this.length; i++){
        funcaoCallback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.simulandoForEach(function(nome, indice){
    console.log(`[${indice + 1}] ${nome}`)
})
console.log()

var verif = 1
aprovados.simulandoForEach(function(nome, indice, array){
    if(verif == 1){
        console.log(array)
        verif = 0
    }
    console.log(`[${indice + 1}] ${nome}`)
})