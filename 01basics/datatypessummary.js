// 2 types of datatypes 
// 1 primivite data type 
// it is of seven types 
// 1 string 
// 2. number 
//3. boolean 
//4 . null
//5 , bigint
//6. undefined
//7 . symbol 
   
const id = Symbol("123")
const anotherId =Symbol("123")
console.log(id===anotherId);   // both are not same because symbol data type defines uniquely

//2 non-premitive 
// arrays, objects, functions

const heroes = [ "irfan" , "farhan" , "hussain" ]  // arrays represented in square brackets 

 let myObject =   {   // objects in flower brackets  aur bracket ka andar jitna bi hai vo object hai
    name: "irfan", 
    age:20
}

const myFunction = function(){
    console.log("hello world ");
    
} 


console.log(typeof Function); // out -> objectfunctoin 

console.log(typeof Array);   // output -> functoin 

console.log(typeof Object);   // output -> functoin



  // data types              // return type 
console.log(Symbol);          //symbol
console.log(Number);           // number
console.log(String);           // string
console.log(Boolean);           //boolean 
console.log(null);              // object
console.log(undefined);         // undefined
console.log(BigInt);            // bigint 

//====================MEMORY======================
 // two types of memory 
 // 1. stack  // used in primitive 
 // 2. heap   // used in non-premitive 

 let myYoutubeName = "mohammedirfanhusaain"
  let anotherName =  myYoutubeName
  anotherName = "farhanahmed "
  console.log(anotherName);
  console.log(myYoutubeName); // it makes copy  primitive data 


  let userOne = {
    email:"irfangmail.com",
    upi: "abcd" 
  }
  let userTwo = userOne
 userTwo.email = "farhanahmed"
 console.log(userOne);
 
console.log(userTwo);  // user mai jo hai vo user one mai aya gaya isku reference bolta ya sirf non -preimtive mai hota 
  
  

















// console.log(typeof String);
// console.log(typeof Number);
// console.log(typeof Boolean);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof symbol);
// console.log(typeof BigInt);

