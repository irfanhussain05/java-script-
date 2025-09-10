//forof loop mostly used for arrays
// ["","",""]
  // common senirio in loops 

const arr = [ 1,2,3,4,5]
for (const num of arr) { // eddar element means  any variable aur object bolatho kis paay loop lagna hai 
console.log(num);
    
}

const greetings = "hwllo world!"
 for (const greet of greetings) {
    if (greet===" ") {      // check for space 
        continue           // skip if it a space 
        
    }

   // console.log(`each value is:${greet}`);
    
    
    
 }
 const map = new Map()
 map .set("IN","india")
 map .set("us","america")
 map .set("dubai","united states of arab")
 map .set("IN","india")
// console.log(map);

for (const [key,value] of map) {       // maps are itterable 
  console.log(key,value);                   
// N india      //output
// us america
// dubai united states of arab
  
}
 const myobject ={              // object is not itterable it doesnt work here 
  game2:"spiderman",
  game1:"wwwe"
 }
 for (const [key,value] of myobject) {
  console.log(key, value);
  
 }
 // i want to push in git hub 