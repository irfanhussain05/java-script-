const marvelHeores = ["thor", "ironman","spiderman"]
const dcHeores = ["superman","flash","batman"]

const heroesAll = marvelHeores.concat(dcHeores)        // concat cpmbines the arrays 
console.log(heroesAll);

const allNewHeroes = [...marvelHeores,...dcHeores]       //... is the spread operator in JavaScript.works same as concat
console.log(allNewHeroes);


const array1 = [1,2, 3, [4,5,6,1,2,3] ,2,4]
const array2 = array1.flat(Infinity)                    //flat(Infinity) removes all nested levels of arrays and makes it a single array.
console.log(array2);

console.log(Array.isArray("irfan"));                    // Array.isArray It checks whether the given value is an array.(gives true or false )
console.log(Array.from("irfan"));                    //Array.from() creates a new array from any iterable (like a string, Set, Map, etc.) or an array-like object

console.log(Array.from( {name:  "irfan"}));            //  []  intersting youtube:3:43

let score1 =100
let score2 =200
let score3 =300
let score4 = [score1,score2,score3]
 console.log( Array.from(score4));
 
 
 