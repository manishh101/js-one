// Creating an array with values
let fruits = ['apple', 'orange', 'banana'];
console.log(fruits);

// Creating an empty array
let emptyArray = [];

//console.log(fruits[0]); // 'apple'
//console.log(fruits[1]); // 'orange'

//console.log(fruits.length); // 3

//Adding elements
//fruits.push('grape'); // Adds 'grape' to the end
//fruits.unshift('watermelon'); // Adds 'watermelon' to the beginning

//Removing Elements
//fruits.pop(); // Removes the last element ('grape')
// fruits.shift(); // Removes the first element ('watermelon')


//Splicing
// Removes elements and/or adds new elements at a specific index
//fruits.splice(1, 1, 'kiwi', 'pineapple'); // Removes 1 element at index 1 and adds 'kiwi' and 'pineapple'
//console.log(fruits);

let fruitsString = fruits.join(); // Joins array elements into a string separated by ', '
console.log(fruitsString);

let moreFruits = ['grapefruit', 'mango'];
let combinedFruits = fruits.concat(moreFruits); // Concatenates two arrays

let hasBanana = fruits.includes('banana'); // Returns true if 'banana' is in the array

let index = fruits.indexOf('orange'); // Returns the index of 'orange' (or -1 if not found)


