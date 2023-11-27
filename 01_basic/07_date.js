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

//console.log(currentDate.toLocaleString()); // Default format based on user's locale

// Using moment.js for more formatting options
// Example: npm install moment
//const moment = require('moment');
//console.log(moment(currentDate).format('MMMM Do YYYY, h:mm:ss a'));


//Manupulating Dates

currentDate.setFullYear(2022);
currentDate.setMonth(5); // Month is zero-based (0 = January, 11 = December)
currentDate.setDate(15);

//console.log(currentDate.toLocaleString());

//Working with Timestamps:
//Timestamps in JavaScript are often represented in milliseconds since the Unix epoch (January 1, 1970). You can get and set timestamps using the getTime() and setTime() methods:

let timeStamp = currentDate.getTime();
console.log(timeStamp);

let newDate = new Date();
newDate.setTime(timeStamp);

console.log(newDate);
