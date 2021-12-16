/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function verificaTriangulo(a, b, c){
    if((a == b) && (a == c) && (b == c)){
        return("Equilátero")
    }else if((a == b) || (a == c) || (b == c)){
        return("Isósceles")
    }else if((a != b) && (a != c) && (b != c)){
        return("Escaleno")
    }else{
        return("Inválido")
    }
}

console.log(verificaTriangulo(1, 1, 1))
console.log(verificaTriangulo(2, 2, 2))
console.log(verificaTriangulo(1, 1, 2))
console.log(verificaTriangulo(1, 2, 1))
console.log(verificaTriangulo(1, 2, 2))
console.log(verificaTriangulo(1, 2, 3))
console.log(verificaTriangulo(4, 5, 6))