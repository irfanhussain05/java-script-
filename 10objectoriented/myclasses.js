// class user {
//     constructor(username,email,password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("chai","chai1212","123")
// console.log(chai.encrptpassword());
// console.log(chai.changeusername());

//BEHIND THE SCENE
function usar(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

usar.prototype.encrptpassword = function() {
    return `${this.password}abc`
    
}
usar.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new usar("irfan","irfan1212","1234")
console.log(tea.encrptpassword());
console.log(tea.changeusername());


