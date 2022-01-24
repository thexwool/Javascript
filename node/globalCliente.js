require('./global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!' // não muda por causa do Object.freeze
console.log(MinhaApp.nome)