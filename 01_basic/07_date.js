//Dates

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());

//let myCreatedDate = new Date (2023,0,24)
let myCreatedDate = new Date (2023,0,24,5,42)
//console.log(myCreatedDate.toLocaleString());

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Month is zero-based (0 = January, 11 = December)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();

//console.log(`${year}-${month + 1}-${day + 1} ${hours}:${minutes}:${seconds}`);

//Formatting Dates

console.log(currentDate.toLocaleString()); // Default format based on user's locale

// Using moment.js for more formatting options
// Example: npm install moment
const moment = require('moment');
console.log(moment(currentDate).format('MMMM Do YYYY, h:mm:ss a'));




