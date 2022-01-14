console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Se é uma função, então possuí um prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('') // transforma em array com o split, reverte a ordem com o reverse e transforma novamente em string com o join
}

console.log('Allan Moreira'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())