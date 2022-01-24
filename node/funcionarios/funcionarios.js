const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/*axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

DESAFIO: MULHER CHINESA COM O MENOR SALARIO
*/

const mulheres = m => m.genero === 'M'
const chinesas = c => c.pais === 'China'
const menorSalario = function(func, funcAtual){
    if(func.salario < funcAtual.salario){
        return func
    }else{
        return funcAtual
    }
}

axios.get(url).then(response => {
    const funcionarios = response.data

    resultado = funcionarios.filter(mulheres).filter(chinesas).reduce(menorSalario)

    console.log(resultado)
})