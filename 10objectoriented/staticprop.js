class user {
    constructor(username) {
        this.username = username;
        
    }
    logme(){
        console.log(`username:${this.username}`);
        
    }
     static createid(){   //static method rahatho access nai kari sakay instance  ko 
         return `123`
       
    }
}
const irfan = new user("irfan")
irfan.logme()
//irfan.createid()
 //console.log(irfan.createid());

 class teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email;
        
    }
 }
 const iphone = new teacher ("iphone","12111")
//    iphone.logme()
console.log(iphone.createid());  // gives an error because of static mehod is not giving accces 

