const user = {
    username:'manish',
    age:4999,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }

}

// user.welcomemessage()
// user.username="ram"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "manish"
//     console.log(this.username); //cannot use "this" inside function,its only used inside object
// }
// chai()

const chai = () => {
    let username = "manish"
    console.log(this);
}

//chai()

// const addTwo = (num1,num2) =>   num1 + num2
// const addTwo = (num1,num2) =>  ( num1 + num2)//impliclit return
const addTwo = (num1,num2) => ( {username:"manish"})


console.log(addTwo(2,3));