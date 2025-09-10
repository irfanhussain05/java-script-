// foreach loop
/* forEach is an array method in JavaScript.
  it is a default method in array
It is used to loop through each element in an array and perform some action on them.
     */

const coding =[ "java", "python", "cpp", "javascript", "php"]

coding.forEach(  function (coding){      // here no need to write any name after function and pass any name in parameter
  //console.log(coding);
  
})
 // by using arrow functoin 

 coding.forEach( (item)=> {
   // console.log(item);         
    
 } )
 // another method here we write frist funcctoin 
 function printme(item){
   // console.log(item);
    
 }
 coding.forEach(printme)
   //======//



 coding.forEach( ( item, index,arr)=> {
  //  console.log(item,index,arr);        // output will be in this way// java 0 [ 'java', 'python', 'cpp', 'javascript', 'php' ]
    

 })

//  const names = [ "irfan", "hussain", "mohammed"]
//  names.forEach( (students)=> {
//     console.log(students.toUpperCase());


//  }) 
 
 const mycoding = [
    {
        languagename: "javascript",
        languagefile:" js"
    },
    {
        languagename: "python",
        languagefile:" py"
    },
    {
        languagename: "cpp",
        languagefile:" c"
    }
 ]
  mycoding.forEach ( (item)=>{
console.log(item.languagename);

  })  // object sa retrive  aisa karna 