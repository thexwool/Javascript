function Carro(velocidadeMax = 200, delta = 5){
    //atributo privado que pertence apenas ao escopo dessa função
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){ 
        return velocidadeAtual 
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log()
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log()
console.log(typeof Carro)
console.log(typeof ferrari)