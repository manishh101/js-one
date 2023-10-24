const accountId=232423
let accountEmail="manish@gmail.com"
var accountName="manish"
accountPassword="nakjnan" 

let accountState

/*
 prefer not to use var because of issue in block scope and functional scope
*/
accountEmail="pulchowk@gmail.com"
accountName="pulchowk"
accountPassword="a121z" 
console.table([accountId,accountEmail,accountName,accountPassword,accountState])