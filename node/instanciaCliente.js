const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
console.log(contadorA.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
console.log(contadorC.valor)