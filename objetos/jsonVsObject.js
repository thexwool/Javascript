const obj = {
    a: 1,
    b: 2,
    c: 3,

    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": [] }'))

const obj2 = JSON.parse('{ "x": 11, "y": 12, "z": 13 }')
console.log(obj2)