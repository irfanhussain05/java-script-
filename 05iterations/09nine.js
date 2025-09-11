const myNums = [1,2,3]
const total =  myNums.reduce(function(acc ,currentval){
   // console.log(`acc:${acc}and currentvalue:${currentval}`);
    
    return acc+currentval
},0)  // here 0 is accumalter value (intitial value )
//console.log(total);
           

// by using arrow function 
const numbers = [1,2,3]
 const all = numbers.reduce((accu,currval)=>accu+currval ,0)
 console.log(all);
 

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce(  (acc,item)=> acc+item.price,0  )
console.log(totalPrice);
