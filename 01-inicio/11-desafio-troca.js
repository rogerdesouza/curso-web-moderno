let a = 7
let b = 94

// depois da troca... a = 94 e b = 7

// forma 1
a += b
b = a - b
a -= b

// forma 2
// let temp = a
// a = b
// b = temp

// forma 3
// [a, b] = [b, a]

console.log(a)
console.log(b)
