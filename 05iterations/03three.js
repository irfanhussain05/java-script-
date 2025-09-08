//forof loop 
// ["","",""]
// [{},{},{}]    // common senirio in loops 

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

 console.log(map);

 const arr1="kaif"
 for (const topper of arr1) {
  console.log(`${topper} is topper of svit`);
  
 }