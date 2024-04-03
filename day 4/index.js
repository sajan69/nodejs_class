const numbers = [1,3,5,7]
const n = numbers.map(num => num*4)
const div = numbers.filter((num) => num%2===0)
console.log(div)
console.log(n) // [4, 12, 20, 28]