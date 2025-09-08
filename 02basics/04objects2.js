
// const tinderuser = new Object()     // singleton  output:{} both are same 
 const tinderuser={}  // not a singleton   output:{}

 tinderuser.id = "123abc"
 tinderuser.name= "sammy"
 tinderuser.isLoggedIn = false
//  console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fristname:"irfan",
            lastname:"husssain",            // object nesting yani object ka andar kitana bi objects nest karsathey
        }

    }
}
console.log(regularuser.fullname); //{ userfullname: { fristname: 'irfan', lastname: 'husssain' } } output
console.log(regularuser.fullname.userfullname); //{ fristname: 'irfan', lastname: 'husssain' } output
// console.log( regularuser.fullname?.userfullname.fristname);

const obj1 ={ 1:"a", 2:"b", }
const obj2 ={ 3:"a", 4:"b", }
const obj3 ={ 5:"a", 6:"b", }

// const obj4 = Object.assign({},obj1,obj2,obj3)       // object.assign is used to combine the objects
// console.log(obj4);      //we use this less                // output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }       

const obj4 = {...obj1,...obj2,...obj3}      //spread
// console.log(obj4);

const users=[
    {
        id:1,
        email:"i@gmail.com"         //array ka andar object
    },
    {

    }
]
users[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser));    // object.keys is used to take keys from object and all the keys are stored in arrays output:[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser));   // same but values output:[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderuser));  // output:[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ] output mai array ka andar keyvalue pair bi array mai rahatha
console.log(tinderuser.hasOwnProperty('isLoggedIn'));  // hasOwnProperty tells that value is present or not but answering in true or false here isLoggedIn' exists directly inside tinderuser → ✅ true


                                      //OBJECT DESTRUCTURING //  
  /* destructuring is a way to unpack (extract) properties from an object into variables in a simple, clean syntax.

Instead of accessing each property manually, destructuring makes it shorter.       */                               
const course = {
    coursename:"javascript",
    price:999,
    courseInstructor:"mohammedirfan"
}                                      
//console.log( course.courseInstructor);  every time typing is difficiut object destructuring makes iit easy
//destructuring syntax const{}=objectvariable
const{courseInstructor:teacher,price,coursename}=course   // we can change the key value by using : after keyvallue and can write your own value ie :teacher
console.log(teacher,price,coursename);


//jeosen syntax
{
// coursename:"javascript",
//     price:999,
//     courseInstructor:"mohammedirfan"
// 
}


