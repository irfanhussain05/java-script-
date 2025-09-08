const score = 400
console.log(score);  // output :400

const balance = new Number(100)
console.log(balance);                // output:[number:100]
   
console.log(balance.toString().length);    // 100number became string 
console.log(balance.toFixed(2));           // to fixed is used to add decimal value after number and if there is ie 100.123 in balance and fixed is 2 then output will be 100.12


const otherNumber = 123.896
console.log(otherNumber.toPrecision(3)); // give preciced value 

const hundered = 1000000
console.log(hundered.toLocaleString());    // keeps , to show the value ie : 10,00,000


 //=============================   MATH =========================//
  
 console.log(Math);   // math is object it has many properties 

 console.log(Math.abs(-4));  // abs (absoulte ) convert - sign only in to + sign 
 
  console.log(Math.round(4.6))    // make round figure of the number 

  console.log(Math.floor(4.9)); // always choose lower number 

  console.log(Math.ceil(4.1));  // always choose higher number 

  console.log(Math.sqrt(16));  // give squareroot 

  console.log(Math.min(12,23,34,45,));  // tells min value 
 console.log(Math.max(12,23,34,45,)); // tells max value

 console.log(Math.random()+1);  //  always value comes between 0 and 1 in decimal form 
 console.log((Math.random()*10)+1); // if we multiply by 10 one value swift at left side the value comes betwwen 0 and 10 if we add +1 we dont get 0 value 
 
  console.log(Math.floor(Math.random()*10)+1)   // floor rounds the value 
    


const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min  );  // by this syntax value wiil come between 10 and 20
  
  
  console.log(Math.floor(Math.random()*(20-10+1))+10  );   // we take +1 to avoid 0 
  
  