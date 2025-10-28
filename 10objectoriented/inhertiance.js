class User{
     constructor(username){
        this.username = username;

     }
     logMe(){
        console.log(`${this.username}`);
        
     }
}

class teacher extends User{      // extends help to inhertiance the properties and methods of parent class
      constructor(username,email,password ){
        super(username);          // super help to call the constructor of parent class
        this.email = email;
        this.password = password;
      }
      addcourse(){
        console.log(`a new course is added by ${this.username}`);
        
      }
}
  const chai = new teacher ("chai","chai1231","12345")
     chai.addcourse() 

     const masalatea = new User("masalatea")
     masalatea.logMe()

     chai.logMe()

     //console.log(chai === masalatea);
     console.log(chai instanceof teacher);  // true because teacher is made from chai 
        console.log(masalatea instanceof User);   
     
     
     


