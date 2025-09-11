  //filter      
  /*forEach → no return (undefined).

2.map → transforms each element, returns new array (same length).

3.filter → selects elements by condition, returns new array (may be shorter).*/ 
         
/*const coding =[ "java", "python", "cpp", "javascript", "php"]

const value =  coding.forEach( (item)=>{
    console.log(item);
    return item
})
console.log(value);  // output is undefined because forEach does not return anything.
*/
const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newnum=   myNums.filter((numer)=>{ return numer>4})  // filter return the value
// console.log(newnum);  // here the return value is stored in newnum

const newNums = []
myNums.forEach(  (num) =>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userbook = books.filter ( (bk)=> bk.genre==="History" )

//console.log(userbook);

 
userbook = books.filter((bk)=>
    { return bk.publish>=1995 && bk.genre==="History" })

console.log(userbook);

 

