function setUsername(username){
    this.username = username;
}

function createUser(username,email,password) {
    setUsername.call(this,username);
    this.email = email;
    this.password = password;

}
const chai = new createUser("chai","chai2123","12344")
console.log(chai);

/*
Example

Without this:

function User(username){
    let obj = {};
    obj.username = username;
    return obj;
} 
    ///////
    With this:

function User(username){
    this.username = username;
}   */
