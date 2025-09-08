for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==5) {
       // console.log("5 is the best number");
        
    }
    
   // console.log(element);                         // ctrl+d to change the values at same time
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`outerloop:${i}`);
    
    for (let j = 0; j <= 10; j++) {                   
     //console.log(`innerloop:${j} and inner loop:${i}`);
     //console.log(i + '*' + j + '=' + i*j);
//console.log (`${i} *${j} = ${i * j}`);   // prints table 

   /* First, i = 0 → inner loop runs with j from 0 → 10.

    Then, i = 1 → inner loop runs again with j from 0 → 10.

    This continues until i = 10. */
        
       
        
    }
    
}

const myArray = ["mohammed", "irfan ", "hussain"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
    
}

// breaks and continue

// for (let i = 1; i < 20; i++) {
//     if (i==5) {
//         console.log(`detected 5 `);
//         break                                // if the condition is matched break keyword take out of the loop to line no 49 
        
//     }
//     console.log(`value of i is:${i}`);
    
    
// }


// continue → skips the current iteration and moves to the next one.
for (let i = 1; i < 20; i++) {
    if (i==5) {
        console.log(`detected 5 `);
        continue                    //skip value of i :5
        
    }
    console.log(`value of i is:${i}`);
    
    
}