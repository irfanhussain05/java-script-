/*switch (key) {
    case value:     //syntax of switch
        
        break;

    default:
        break;
}*/
const month =3
switch (month) {
    case 1:
        console.log("january");
         break;
    case 2:
        console.log("febuary");
         break;
    case 3:
        console.log("march");
         break;     // if we dont use break , next conditions will be exectued expect default
    case 4:
        console.log("april");
         break;

    default:
        console.log("print deafult");
        
        break;
}
    // used string 

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You selected Apple 🍎");
    break;

  case "banana":
    console.log("You selected Banana 🍌");
    break;

  case "mango":
    console.log("You selected Mango 🥭");
    break;

  default:
    console.log("Unknown fruit");
}
