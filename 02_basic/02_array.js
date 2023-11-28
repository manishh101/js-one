const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

//marvelHeros.push(dcHeros)

//console.log(marvelHeros);

// allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allHeros = [...marvelHeros,...dcHeros];
//console.log(allHeros);

const otherArray = [1,2,3,[4,5,[7,8,9]]];
const realArray = otherArray.flat(3) 
//console.log(realArray);

let num1 = 10
let num2 = 20
let num3 = 30

console.log(Array.of(num1,num2,num3));
