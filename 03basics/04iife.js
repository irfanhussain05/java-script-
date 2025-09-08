// Immediately Invoked Function Expression (iife)
(function chai (){
    // this is named IIFE as chai
    console.log(`db connected`);
    
})(); // always keep ;   //()() syntax   // here no need to write chai() just write ()
  
 ( ()=>{
    console.log(`db connected two`);
    
})();
/////// this is a simpke IIFE

 ( ( name)=>{
    console.log(`db connected  ${name}`);      //passing parameters and aurgment
    
})("irfan");