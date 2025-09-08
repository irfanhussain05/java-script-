const accountId = 123345
let accountEmail ="irfan@gmail.com"
var accountPassword = "12345"
accountCity = "pune" 
let accountState;  //unddefined 

// accountId = 123456

console.log(accountId);
accountEmail = "farhan05@fgmail.com"
accountPassword = "54321"
accountCity = "mumbai"


/*
perfer not to use var because of issue in blockscope and functional scope 

*/
console.table([,accountId ,accountEmail, accountPassword, accountCity, accountState])
let marks =12
// marks = "irfan"
// marks = "null"
marks = true
console.log(typeof(marks));
console.log(marks);