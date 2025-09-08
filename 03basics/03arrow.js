const user = {
 username:"irfan",
 price:999,
  welcomeMessage:function(){
    console.log(`${this.username} welcome to website`);       // we use this. to aceess from current context 
      console.log(this);
      
  }
}
user.welcomeMessage()
 user.username= "sam"
 user.welcomeMessage()
    // console.log(this); // output:{} there is nothing in global scope 


      function chai(){
        const username = "irfan"
        console.log(this.username);
        
      }
    // chai()    // output; undefined because this. is not working for function only working in object 


      const chais = function(){
        const username = "irfan"
        console.log(this.username);
        
      }
      //chais() //output:undefined

      const chaiss = () =>{                      // syntax for arrow functoin 
        let username = "irfan"
        console.log(this);       // output:{}
        console.log(this.username);       // output:undefined

        //()=>{}
      }
      chaiss() 
           //+++++++++

      const addtwo = ( num1,num2) =>{
        return num1+num2                       // basic arrow function , {}mai lika tho return keyword likna zarori hai
                                                  
      }
      //console.log(addtwo(3,4));

      //Implicit return
      const addone = (num1,num2)=>num1+num2
      console.log(addone(3,4));
 ///      
       const addone1 = (num1,num2)=>(num1+num2)  //() ya use karsathey 
      console.log(addone1(3,4));
      
      const obj =()=>({username:"irfan",})    // object is written like this in arrow function
      console.log(obj());
      