    // let myName = "mohammed      "
    //let mycode = "java      "
    //console.log(myName.trueLength);
    

let myHeros = [ "thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman:"web",

    getspiderpower: function(){
        console.log(`spider power id ${this.spiderman}`)
    }
}
Object.prototype.irfan = function(){
    console.log("irfan is present");
    
}
Array.prototype.hiirfan = function(){
    console.log("hello irfan ");
    
}

//heropower.irfan()
myHeros.irfan()
myHeros.hiirfan()


// INHERTIANCE 
const user={
    name : "irfan",
}

const teacher = {
    makevideos:true
}
const  teachingsupport = {
    isavailable:false 
}
const TAsupport = {
    makeAssigment : "js assigment",
    FullTime : true ,
    __proto__ : teachingsupport
}
// old syntax 
teacher.__proto__ = user 

console.log(teacher.name);

//modern syntax 
Object.setPrototypeOf(teachingsupport,user)

////////
let anotherUserName  = "chaiaurcode          "

String.prototype.truelength = function(){
   console.log(`${this}`); // this is pointing to the string object ie "chaiaurcode          "
    console.log(`true length is ${this.trim().length}`);
    
    
}
anotherUserName.truelength()
"hussain".truelength()  // here this is pointing to "hussain"
"farhan ".truelength()

let myname = "mohammed    "
myname.truelength()