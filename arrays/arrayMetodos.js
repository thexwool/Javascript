// por ser constante, não pode ser reatribuido -> pilotos = ['...','...'] <-ERRO
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') 
/* 2 -> elemento onde será trabalho
   0 -> número de remoções
   ... -> adição de elementos */
console.log(pilotos)

pilotos.splice(4, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array com elementos a partir da posição indicada
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega os indices de 1 a 3 pois o 4 não é incluso