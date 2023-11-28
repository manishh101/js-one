//singleton
//Object.create

//object literals

const mySym = Symbol("key2");

const JsUser = {
    name : 'Manish',
    "full_name": 'Manish Rajbanshi',
    age : 20,
    [mySym] : "sym",
    level : 'bachelor',
    location : "ktm",
    email : "manishhrajbanshi@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['sunday','monday']

}

// console.log(JsUser.name);
// console.log(JsUser['email']);
// console.log(JsUser.full_name);
// console.log(typeof(JsUser[mySym]));

//JsUser.email = "rajbanshibbs@gmail.com";
// console.log(JsUser['email']);
//Object.freeze(JsUser)
//JsUser.email = "manishhibbs@gmail.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log('Hello js user');
}

JsUser.greetingTwo = function() {
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

