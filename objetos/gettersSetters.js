const sequencia = {
    _valor: 1, // convenção para indicar que o valor só será usado internamente

    get valor(){
        return this._valor++
    },

    set valor(valor){ // não existe sobrecarga em JS, com exceção dos getters e setters
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
