function myName(){
console.log('Manish');
}

// myName();
// myName();

// function addTwoNumbers(num1,num2){
//    console.log( num1 + num2);

// }


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    // console.log('manish');// after value is returned ,nothing works down there
 }
const result = addTwoNumbers(1,7);

// console.log('result:',result);

// function LoginUserMessage(userName='Manish'){
//     if(!userName){
// console.log("Please enter a user name");
// return
//     } //userName===undefined
//     return(`${userName} just logged in`)
// }

// // console.log(LoginUserMessage('Manish'));
// console.log(LoginUserMessage());

// function loginUserMessage(userName){
//     if(!userName){
//         console.log('Please enter a username');
//         return
//     }
//     return (`${userName} just send a message`)
// }

// console.log(loginUserMessage());

function calculateprice(...price){
    return price
}

// console.log(calculateprice(100,200,300));

const user = {
    userName : 'Manish',
    age : 20
}

function handleObject(anyobject){
    //console.log(`username is ${anyobject.userName} and age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    userName:'manish',
    age: 20
})

const newArray = [100,200,300,400]

function getOnlyArray(getArray){
    return getArray
}

//console.log(getOnlyArray(newArray));
console.log(getOnlyArray([100,200,400,1000]));


