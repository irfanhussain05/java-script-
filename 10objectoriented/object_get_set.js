const user = {
    _email:"mohammed@123",
    _password:"mohd123",   

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
              this ._email = value;
    }

}

const md = Object.create(user)  // here we are creating object md from user object using Object.create method
console.log(md.email);
