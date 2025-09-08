const name = "irfan"
const value = 5

console.log(name+ "hussain"+value); // oldmethod 

console.log(`helloo my name is ${name } and my repo values are ${value}`)  //  this  is new version use this 

const gameName = new String("irfan-hussain")  // in browser console we get output as // New keyword is used 

            console.log(gameName.length);
                                    // string :"irfan" 0:i, 1:r ,2:f ,3:a ,4:n , length:5 and many prototypes 

console.log(gameName[0])  // outout: i

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("f"));


let newString=  gameName.substring(0,2)  // it doesnt include 2 value 

console.log(newString);


const anotherName = gameName.slice(-4)  // here we can use negative values also {same ike sub string } //4 means → start 4 characters from the end.
console.log(anotherName);


const newStringOne = "   irfan   "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim prevent from extra gap 

const url = "https://irfan.com/irfan%20hussain.com"
console.log(url.replace("%20","-"));                 // reoplace the words 

console.log(url.includes("irfan")); // we can ask questoin by using includes the answer will be in true or false 

 let happy = "hi iam mohammed irfan hussain of svit "
console.log(happy.split("-"));   //split(" ") breaks the string into an array of words, using the space (" ") as separator
console.log(happy.split(""));


const array1 = ["irfan"]
const array2 = [ "hussain"]
const array3 = array1.concat(array2)   // concat cpmbines the arrays 
console.log(array3);


const str1 = "Cats are the best!";      
console.log(str1.endsWith("best", 17)); //check whether the string end with give one its gives output in true or false 


const str = "Cats are the best!"
console.log(str.length);              // to find the length we use length
 

