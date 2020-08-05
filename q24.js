const prompt = require("prompt-sync")();
const area = require("./q24-api");
const ar = new area();
console.log("***MENU*** \n 1.Circle \n 2.Rectangle \n 3.Square \n 4.Triangle \n 5.Exit");
let choice = parseInt(prompt("Enter your choice :"));
switch(choice){
    case 1:
        var radius = parseFloat(prompt("Enter the radius of circle :"));
        console.log(`Area = ${ar.circle(radius)}`);
        break;
    case 2:
        var length = parseFloat(prompt("Enter the length of rectangle :"));
        var breadth = parseFloat(prompt("Enter the breadth of rectangle :"));
        console.log(`Area = ${ar.rectangle(length,breadth)}`);
        break;
    case 3:
        var side = parseFloat(prompt("Enter the side of square :"));
        console.log(`Area = ${ar.square(side)}`);
        break;
    case 4:
        var height = parseFloat(prompt("Enter the height of triangle :"));
        var base = parseFloat(prompt("Enter the base of triangle :"));
        console.log(`Area = ${ar.triangle(base,height)}`);
        break;
    case 5:
        console.log("Thankyou ...");
        process.exit(1);
        break;
    default:
        console.log("Invalid entry .. Please enter correct option");
        break;
}
