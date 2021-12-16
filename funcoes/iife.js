// IIFE -> Immediately Invoked Function Expression

(function(){ // Tudo o que está dentro ficará fora do escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')