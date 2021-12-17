/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = function(capitalIni, txJuros, tAplic){
    let resultado = capitalIni + (capitalIni * txJuros * tAplic)
    return resultado
}

const jurosCompostos = function(capitalIni, txJuros, tAplic){
    let resultado = capitalIni * ((1 + txJuros) ** tAplic)
    return resultado
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));