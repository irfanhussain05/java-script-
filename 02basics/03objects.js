
/*A singleton means only one instance of an object exists.
In JavaScript:

When you create an object with object literal {}, you can make many objects.

But when you use new Object() constructor, each call still creates a new instance, so it’s not automatically singleton.*/


//singleton
//object.create


// 2 types to declerce objects
  // 1.literal
  // 2.consturctor
  
  //object literal 
  const mysym = Symbol("key1")
const JsUser ={
    name:"irfan",                                      
    "fullname":"mohammed irfan hussain ",                              // by default here name ,age,locatoin ....etc all are strings 
     age:20,
     [mysym]:"mykey1",     //symbol key must be inside []
    locatoin:"hyderabad",
    email:"irfan@gmail.com",
    isLoggedIn:false,
    lastLogginedDays:["monday","friday"]
    
}
console.log(JsUser.email);            //not the coorect way
console.log(JsUser["email"]);           // correct way to access because see the 3:52 youtube 
console.log(JsUser["fullname"]);
//console.log(typeof  JsUser.mysym);    //write [mysym]:"mykey1"in jsuser lineno :15
console.log( JsUser[mysym]);        // use this syntax [mysym]
//consolelog(JsUser);


JsUser.email = "hussain@gmail.com "  // to change the values or overwrite
console.log(JsUser);
// Object.freeze(JsUser)                       // after freeze we cannot change any thing in object 
JsUser.email= "mohammed@123"


JsUser.greetings = function(){
  console.log("hello js user");
  
}     
JsUser.greetingstwo = function(){
  console.log(`hello js user , ${this.name}`);   // taking value from object by using ${this. }
  
}     


   console.log(JsUser.greetings()); // output:hello js user 
  console.log(JsUser.greetingstwo()); //output:hello js user ,irfan 

  // JsUser.greetings();
  // JsUser.greetingstwo();

