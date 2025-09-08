// var c = 300  
let a = 300
   // ya pura global scope hai ,global scope ki value block scope mai use karsathey mai block scope ki value global scope mai use nahi karsathy

  if (true) {  // if ka andar lika so block scope hai
    const a = 10  //error atta (accchi bath hai )const a ya scope ka andar ich kam karta ,aur ya scope bahar nahi kam karta
   let b =20       //same as line no :3 comment
   var c=30         // ya var c exectue hota isliaya ya use nahi kartha ,ya scope{} ka bahar bi kaam karta
    console.log("inner:",a);// output:inner:30
    
}
console.log(a); // output:300
//    console.log(b);
    // console.log(c);

    function one(){                                   //But the parent (one) cannot access variables declared inside the child
      const username = "irfan" 

      function two(){
        const website = "youtube"                   //eg chota bhacha bada sa ice lasathey hai magar bada nahi, A child function can access variables from its parent.
        console.log(username);
        
      }
       //console.log(website);  //error becuase parent cannot access child 
       
      two()
    }
   //one()      // to get output we need to call one() 



         //++++++++++++++++++++//
  if (true) {
     const username ="irfan"
    if (username==="irfan") {
      const website = " youtube"
      console.log(username+website);
      
      
    }
   // console.log(website);//error because parent cannot acess child 
    
  } 
//  console.log(username); // error because out of scope 




  //+++++++++++++++++++++ intersting     ++++++++++++++++++++++//
  // 
  console.log(addone(5));       // no problem if we access before declearation
  function addone(num){
    return num+1                      // basics functoin 
  }
      //+++  
//console.log(addtwo(5));    // but tis gives error it cannot be access before decleration 

const addtwo = function(num){           // another way to decleare functoins 
  return num +2

}
// console.log(addtwo(5));


