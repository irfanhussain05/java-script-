function user (email,password){   // this is function based 
    this._email = email 
    this._password = password

    Object.defineProperty(this,"email",{    // here we are using defineProperty to create getter and setter // and functoin is and object 
        get:function()
        { return this._email.toUpperCase() },
        set:function(value){this._email = value;}
    })
}
const hussain = new user ("hussain@123","mohd123")
console.log(hussain.email);
