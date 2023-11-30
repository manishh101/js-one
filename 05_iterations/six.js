const coding = ['js','ruby','java','python','cpp']

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (value) =>  {
// console.log(value);
// })

const myNums = [1,2,3,4,5,6,7,8,9,10]

// console.log(myNums.filter((num) =>{
//    return num>4
// }  ));

const newNums = []

myNums.forEach( (num) => {
    if (num>4) {
        newNums.push(num)
    }

} ) 

// console.log(newNums);


const Heros = [
    {
        name :'Manish',
        age :20
    },
    {
        name :'gaurav',
        age :19
    },
    {
        name :'sundar',
        age :19
    },
    {
        name :'samrat',
        age :10
    }
]

// console.log(Heros.forEach( (item) => {
//     console.log(item.name);
// }));

const books = [
    { titile: "Book One" , genre:'fiction', publish: '', edition:'2001'},
    { titile: "Book Two" , genre:'non-fiction', publish: '', edition:'2002'},
    { titile: "Book three" , genre:'history', publish: '', edition:'2003'},
    { titile: "Book four" , genre:'science', publish: '', edition:'2004'},
    { titile: "Book five" , genre:'history', publish: '', edition:'2005'},
    { titile: "Book six" , genre:'fiction', publish: '', edition:'2006'},
    { titile: "Book seven" , genre:'science', publish: '', edition:'2007'},
    { titile: "Book eight" , genre:'non-fiction', publish: '', edition:'2008'},
    { titile: "Book nine" , genre:'fiction', publish: '', edition:'2009'},
]


const booksFileHistory = books.filter( (items) => items.genre==='history')
const booksFileFiction = books.filter( (items) => items.genre==='fiction')
const booksFileNonfiction = books.filter( (items) => items.genre==='non-fiction')

console.log(booksFileHistory);
console.log(booksFileFiction);
console.log(booksFileNonfiction);