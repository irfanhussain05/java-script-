const promiseOne = new Promise(function (resolve, reject) {
  // creating the promise
  //do any async task
  // DB calls , cyptrography , networkcalls
  setTimeout(function () {
    console.log("Async task is completed ");
    resolve(); // we should write these method because it connects with then
  }, 1000);
});

// consume the promise

promiseOne.then(function () {
  // then has direct connection with resolve
  console.log("promise conusumed ");
}); // output: Async task is completed
//promise conusumed

// here we have not decleared a variable
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2 ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved ");
});

// promise 3

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "irfan", email: "mohdirfan@123gamil.com" }); // data is passed in resolve
  }, 1000);
});

promiseThree.then(function (user) {
  // function ma user lika data exectue karna
  console.log(user);
});

// promise four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // false
    if (!error) {
      // error == null
      resolve({ username: "irfan", password: "123" });
    } else {
      reject(`error : something wentwrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; // we use two then the return value should pass in then
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("the promise is either resolved or rejected "));

// promise five using async await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      // error == null
      resolve({ username: "python", password: "husssain123" });
    } else {
      reject("error: python went wrong ");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const Responce = await promiseFive; // async ayya tho wait lagay ga
    console.log(Responce);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive(); // async await ka sath try catch lagta hai

//

//    async function GetAllUser(){

//    try {
//     const responce =  await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await responce.json()
//      console.log(data);
//     // console.log(responce);

//    } catch (error) {
//     console.log(`error has found `);

//    }

//    }
// GetAllUser()

// same function using then

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Responce) => {
    return Responce.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
