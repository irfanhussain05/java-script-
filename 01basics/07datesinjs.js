// dates 
 const myDate = new Date()
console.log(myDate); // unable to read 2025-08-30T02:29:53.788Z
console.log(myDate.toString());//  Sat Aug 30 2025 07:59:53 GMT+0530 (India Standard Time)
console.log(myDate.getTime()); // 1756521052404
console.log(myDate.toISOString()); //  2025-08-30T02:30:52.404Z
console.log(myDate.toLocaleString()); //  30/8/2025, 8:00:52 am
console.log(myDate.toDateString());//  Sat Aug 30 2025

console.log(typeof myDate); //object
let myCreatedDate = new Date(2025, 7 ,30 )  // months with 0 example janaury(0)month 
console.log(myCreatedDate.toDateString());

let myMakeDate = new Date(2025, 7 ,30,5,3 )  
console.log(myMakeDate.toLocaleString());
console.log(myMakeDate.toLocaleDateString());

let myTomDate = new Date( "08/30/2025")  //mm/dd/yy // in this the month start with 01 
console.log(myTomDate.toLocaleString());
  
let myTimeStamp = Date.now()        //Date.now() returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
console.log(myTimeStamp);   
console.log(myTomDate.getTime());
console.log( Math.floor(Date.now()/1000));   //Dividing by 1000 → converts milliseconds → seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);
console.log(newDate.getFullYear());
 console.log(
     newDate.toLocaleString( "default",   // default is used as current locatoin ie india 
    {
        weekday: "narrow"     // customizatoin 
    }
)
 );
   






