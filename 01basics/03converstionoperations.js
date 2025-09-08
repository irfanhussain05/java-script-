        // converstions of data types 

let score = "32abc"          // score is a string  // also check with null, booalean , undefined 
console.log(typeof score);

let valueInNumber = Number(score)    // score is convert in to number by usind Number data type , if we check the output it show number console.log(typeof valueInNumber);
console.log(typeof valueInNumber);
console.log(valueInNumber);          // if we check what is the value present in valuueInNumber it shoes NaN ( NOT A NUMBER )


// "32" -> 32 ( converted easily )
// "32abc" -> NaN ( shows  type number but cannot be converted )
// true-> 1 , false-> 0

let isLoggedIn = 1

let booaleanIsLoggedIn = Boolean( isLoggedIn)
 console.log(booaleanIsLoggedIn);
 

 // 1-> true  0->false 
 // ""->false , "irfan "-> true 

 let someNumber = 33

 let stringNumber = String( someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);
 
/* ---------------------- OPERATIONS ------------*/

let value = 3

let numberValue = -value
console.log(numberValue);


// console.log( 2+2)
// console.log( 2-2)
// console.log( 2*2
// console.log( 2**3) power of
// console.log( 2/2)
// console.log( 2%2) 
let str1 = " assalwailkum "
let str2 = " irfan "
let str3 = str1+str2
console.log(str3);

console.log("1"+2); //output 12
console.log(1+"2");  // 12 
console.log("1"+2+2); // 122
console.log(1+2+"2"); //32 because we used frist number is a rule  // dont use this types of codes 

console.log((3+4)*4); // use brakets like this 


// increment (++)
          // post increment (x++)
 let x = 3
let y = x++;  // isma y ki value frist assign huvi usko a bad x+1 huva isliya x=4 , y=3 
console.log(x,y);

              // pre increment (++x)
let a = 3 
let b = ++a 
console.log(a,b); // isma 1+a phela hota uska ka bad b ku value assign hota a =4 b=4 
             




 