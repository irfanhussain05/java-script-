// object literal 
const user = {
    username: "irfan",
    logincount:4,
    signedin:true,

    getuserdetails:function(){
        console.log(`got user deatails from database`);
         console.log(this.username);
       // console.log(this);
        
        
        
    }

}
//console.log(user.username);
// console.log(user.getuserdetails());
user.getuserdetails();


// constructor function

function usar(username,isloggedin,logincount) {
    this.username=username;
    this.isloggedin=isloggedin;
    this.logincount=logincount;

    return this
}
const userone = new usar("irfan",true,5);
const usertwo =  new usar("hussain",false ,2);  //if we dont use new keyword then  usertwo overrides user one 
 
console.log(userone);


