function myName(){
    console.log("i");
    console.log("r");
    console.log("f");
    console.log("a");
    console.log("n");

}
// myName() //Calling the function to print the output

// function addTwoNumber(number1,number2){                         //parameters 
//        console.log(number1+number2);
       
// }
// addTwoNumber(3,5)                                               /aurgements 



// example 1
function addTwoNumber(number1,number2){                          
       let result = number1+number2
       return result                                        // after return we cannot print any thing
}
 const  result = addTwoNumber(3,5)   
 console.log( "result:",result);
  

// example 2   method2
 function greet(name) {
  return "Hello " + name;
}

let results = greet("Irfan");

console.log(results); // Hello Irfan
 console.log( "result:",results);
  

 //example3  method 2
 function subtract(num1,num2){
    return num1-num2
 }
 const resultss = subtract(10,2)
  console.log("result:", resultss);

  //
  function isUserLogginedIn ( username){
    if (username === undefined) {
        console.log("please enter name");
        return
        
    }
    return ` ${username} just looged in `
  }
//   console.log(isUserLogginedIn("irfan"));    // if no value is passed in augument(  ) that oupt will be undefined just logged in 
  console.log(isUserLogginedIn());     // output : undefined
  
   //...num1 inside the function parameter is called the rest operator.
   function calculateCardPrice(/*value1,value2,*/...num1){   // functoin mai use karrey tho rest boltha nahi tho spread boltha
         return num1
   }
 console.log(calculateCardPrice(100,200,300,400));// output:[ 100, 200, 300, 400 ] this is arrray
 
 //functoins with objects
const user = {
  username:"irfan",
  price:199,
}
function handleObject(object1){
     console.log(`my name is ${object1.username} and my price is ${object1.price}`);
     
}
// handleObject(user)  // output:my name is irfan and my price is 199
handleObject({
  username:"hussain",
  price:200,                  //direct bhee pass karsathey
})

// functoin with array 
const myNewArray = [ 10,20,30,40]

function returnFristValue( getarray){
  return getarray[1]

}
console.log(returnFristValue(myNewArray));
console.log(returnFristValue([100,200,300,400]))  // passes an array directly.not using a variable,


