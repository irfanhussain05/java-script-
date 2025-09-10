  // forin loop 
//{} object pai loop lagana hai tho for in loop 

const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple ",
}
for (const key in myobject) {
   // console.log(key);           // out put will be all keys ie js,cpp,rb,swift
    
    
   
}
for (const key in myobject) {
//console.log(myobject[key]);   // output will be all values  ie javascript , c++,ruby,swift by apple 
    
    
   
}
for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
     
}
const programming = [ "js","cpp", "java", "python"]

for (const key in programming) {
   // console.log(key);    
    // output:
    /* 0
       1
       2
       3*/  // because in array key are 0 , 1,2 etc 
    
}
// to print all the array values we use this log  
for (const key in programming) {
    console.log(programming[key]);  //we this mothed  
    
    
}