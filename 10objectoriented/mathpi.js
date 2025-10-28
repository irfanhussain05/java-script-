 const descriptor = Object.getOwnPropertyDescriptor(Math,"PI" )
//console.log(descriptor);

//console.log(Math.PI);//3.141592653589793  

  // Object.getOwnPropertyDescriptor() is a built-in JavaScript method that returns the property descriptor for a specific property on an object.

  const chai = {
    name:"masalatea",
    price : 250,
    isAvailable : true,

    order:function (){
      console.log(`chai nahi bani `);
      
    }

  }
 // console.log(chai);
  console.log(Object.getOwnPropertyDescriptor(chai,"name"));

  // Object.defineProperty(chai  ," name",{   // defineProperty helps us to change the property descriptor 
  //   writable: false,
  // enumerable: false,
  // })
  // console.log(Object.getOwnPropertyDescriptor(chai,"name")); // here we have changed the property descriptor of name property of chai object

  for (const [key,value] of Object.entries(chai)) {
    if (typeof value != "function") {
      console.log(`${key}:${value}`);
    }
    
    
  }
 