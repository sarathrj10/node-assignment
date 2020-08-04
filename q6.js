const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number between 1 - 7 :"));
switch(num){
    case 1:
        console.log("Its Sunday");
        break;
    case 2:
        console.log("Its Monday");
        break;
    case 3:
        console.log("Its Tuesday");
        break;   
    case 4:
        console.log("Its Wednesday");
        break;
    case 5:
        console.log("Its Thursday");
        break;
    case 6:
        console.log("Its friday");
        break;
    case 7:
        console.log("Its Saturday");
        break;
    default:
        console.log("Invalid Entry");
        break; 
}
