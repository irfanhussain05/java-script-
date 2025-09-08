 // arrays 
 const myArray = [0,1,2,3,4,5]
 const myheros = [ "mohammed", "irfan", "hussain", "ali"]

 const myArray2 = new Array( 1,2,3,4,5)   // in new keyword you can use () this 
 console.log(myArray[2]);
   

        // ARRAY METHODS 
 myArray.push(6)       // push is to add the value in the end 
 console.log(myArray);
       
myArray.pop()
console.log(myArray);   // pop is used to remove the value from the end 
 
myArray.unshift(9)
console.log(myArray);   // inserts the value in staring of the array 

myArray.shift()
console.log(myArray);    // removes frist letter from the array 
 
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));  // if the number is not present in the arrays always the indexof will be -1

const newarray= myArray .join()    //  [ 0, 1, 2, 3, 4, 5 ]      (myarray )                              
console.log(  myArray);               //  0,1,2,3,4,5  (newarray)           //  .join(separator) converts array → string.
console.log(newarray ); 
 
                       

                               /////////      \\    \\\ // slice and splice //////////////////////////////////////////////////////////////

        //slice//
const numbers = [10, 20, 30, 40, 50];
const sliced = numbers.slice(1, 3); // doesnt iclude 3
console.log(sliced);    // [20, 30]   //Returns a shallow copy of the selected portion                      
console.log(numbers);   // [10, 20, 30, 40, 50] (original unchanged)   //Does not change (mutate) the original array



                   //splice//
const numbers1 = [10, 20, 30, 40, 50];
const spliced = numbers1.splice(1, 2); 
console.log(spliced);   // [20, 30]  (removed elements)
console.log(numbers1);   // [10, 40, 50] (original changed)
