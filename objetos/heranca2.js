// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // o primeiro elemento da cadeia sempre aponta para o Object.prototype
const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: 'D'
}

const filho = {
    __proto__: pai,
    attr3: 'C',
    attr4: 'E'
}

console.log(filho.attr1)
console.log(filho.attr4)
console.log(filho.attr0)
console.log(pai.attr3)
console.log(pai.attr4)

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){ // shadowing
        return `${this.modelo}: ${super.status()}` // this referencia o obj atual e o super referencia o prototipo (herança)
    } 
}

Object.setPrototypeOf(ferrari, carro) // Ligação de heranças, extends do Java
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())