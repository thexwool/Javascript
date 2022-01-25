// não aceita repetição e não é indexado
const times = new Set()
times.add('Flamengo')
times.add('Atlanta Falcons').add('Arizona Cardinals').add('Avaí')
times.add('Flamengo')
times.add('Arizona Cardinals')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Avaí')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)