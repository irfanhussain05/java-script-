 class user {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value;
    }
    get password(){
       // return this._password.toUpperCase();
       return `${this._password}hussain`.toUpperCase()
    }
    set password(value){
        this._password=value;
    }
 }
 const irfan = new user("irfan@23","irfan1234")
 console.log(irfan.password);
 console.log(irfan.email);
 
 