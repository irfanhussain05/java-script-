function multplyby5(num) {
    return num * 5
}
console.log(multplyby5(5)); // 25
multplyby5.power = 2;
console.log(multplyby5.power); // 2
console.log(multplyby5.prototype); // {}
 ///////////////////////////////////////////////////



function CreateUser(Username,score){
    this.Username = Username;
    this.score = score;
}
// CreateUser.prototype.increment = function(){     // creating own method using prototype
//   this.score++;
// }
CreateUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new CreateUser("chai",25)
const tea = new CreateUser("tea",250)

chai.printme()
tea.printme()

//new keyword explanation
/** 
new is used to create a new object from a constructor function.

Without new, JavaScript will not create a separate object, and the code will not work correctly.

Example with your code
const chai = new CreateUser("chai", 25);


What does new do here?

When you write new CreateUser(...), JavaScript does 4 things automatically:

1️⃣ Creates a new empty object

{}


2️⃣ Sets this to that new object

this = {}


3️⃣ Adds properties to the object

this.Username = "chai";
this.score = 25;


4️⃣ Returns the new object

return this;


So final result:

chai = { Username: "chai", score: 25 }

Without new what happens?

Try:

const chai = CreateUser("chai", 25);


Then:

No object created

this will not point to a new object

Username and score might go to the global scope by mistake

Very wrong behavior

✅ One sentence answer

We use new to tell JavaScript to create a new object using the constructor function.

Super short memory trick
Keyword	Purpose
this	Points to the current object
new	Creates a new object for this  **/