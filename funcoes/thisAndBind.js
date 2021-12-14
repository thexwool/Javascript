const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //sem o this daria um erro.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// Solução
const falarDePessoa= pessoa.falar.bind(pessoa)
falarDePessoa()