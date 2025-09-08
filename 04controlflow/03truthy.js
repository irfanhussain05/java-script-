const useremail = "irfan"        // here ther is no camparision it assume that this is a true value 
if (useremail) {
    console.log("user have email");
    
    
}
else{
    console.log("user dont have email ");
    
}


//falsy value 
// false, 0 ,-0, bigint 0n, "", null , undefined , NaN 
  
// TRUTHY VALUE 
// "0", 'false' , "  "  , [], {}, function(){}

const userid = []   // the condtion to check empty value 

if (userid.length===0) {
     console.log("array is empty");
         
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty ");
    
    
}

// false==0  -> (true) , false==""-> (true), 0 == ""  -> (true)


// Nullish coalescing opertor (??): null , undefined

let  value1;
 value1 = 5??10
//  value1 = undefined??15
 console.log(value1);   // output will be 5
 
let value2;
value2= null??undefined ??10   // output will be 10 
 
console.log(value2);

// Terniary opertor 
  // syntax 
  //   condition ? true : false
  const iceTeaPrice = 100
  iceTeaPrice <= 80 ? console.log("less thna 80"): console.log("greather than 80");   // same like ifelse condition 
  
  
