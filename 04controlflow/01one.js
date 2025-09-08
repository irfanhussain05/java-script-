//if
/*
if (ture) {   //  condition true hai tho executon hota nahi tho nahi hota 
    
}
if (false) {
    // code execution nahi hoga 
} */
// < ,> ,<= ,>= ,== ,!= , ===  (strict equality)  ,!==(strict notequality)  5 !== 5   // false (because both are same value and type)
/*
const temp = 41
if (temp === 40) {     //41===40 false log else 
    console.log("less than 50");
    
    
}else{
    console.log("greather than 50" );
}
// console.log("exected" ); */
//+++++++++++++++++++++++++
/* const score =200
if (score>100) {
    const power = "fly"         // if we use var here we dont get a error because var is globaly scoped 
    console.log(` user power: ${power}`);
    
    
}
//console.log(` user power: ${power}`); //error beause this a global enviroment rember ice cream example */
/*
const balance = 1000   // implicit if syntax (very confusing dont use this syntax)
if(balance>500) console.log("test"),console.log("test2");

if (balance<500) {
    console.log("less than 500");
    
}
else if( balance<750){           //to check more than one condition. That’s where else if comes in.
console.log("less than 750");

}
else if (balance<900) {
    console.log("less than 900");
    
    
}
else{                                       // if all the conditions fails else condtion will excetue
    console.log("greather than 3000" );
    
} */
 const userLoggedIn = true
 const debitCard = true
 const loogedInFromGoogle = false
 const loogedInFromEmail = true
 //&& (logical AND)
 if (userLoggedIn && debitCard) {     //&& is used  check multiple conditions at the same time.if both are true it will exectue if one is false it will not exectue
    console.log("allowed to buy course");
    
    
 }
 // || (logical OR ) , ond1 || cond2 → is true if at least one condition is true.Only denied when both are false.
 if (loogedInFromEmail||loogedInFromGoogle) {
    console.log("opended an account");
    
 }