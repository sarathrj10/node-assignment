const calc = require("./q17-api");
const Calc = require("./q17-api");
const prompt = require("prompt-sync")();
console.log("****MENU****\n");
console.log(" 1.Addition \n 2.Substraction \n 3.Multiplication \n 4.Division \n 5.Exit");
const choice = parseInt(prompt("Enter your choice :"));
switch(choice){
    case 1:
        var num1 = parseInt(prompt("Enter the first number :"));
        var num2 = parseInt(prompt("Enter the second number :"));
        var add = new Calc(num1,num2);
        console.log(`The sum is ${add.addition()}`);
        break;
    case 2:
        var num1 = parseInt(prompt("Enter the first number :"));
        var num2 = parseInt(prompt("Enter the second number :"));
        var sub = new Calc(num1,num2);
        console.log(`The difference is ${sub.substraction()}`);
        break; 
    case 3:
        var num1 = parseInt(prompt("Enter the first number :"));
        var num2 = parseInt(prompt("Enter the second number :"));
        var mul = new Calc(num1,num2);
        console.log(`The product is ${mul.multiplication()}`);
        break;
    case 4:
        var num1 = parseInt(prompt("Enter the first number :"));
        var num2 = parseInt(prompt("Enter the second number :"));
        var div = new Calc(num1,num2);
        console.log(`The quotient is ${div.division()}`);
        break;
    case 5:
        console.log("Thank you !!!")
        process.exit(1);
        break;
    default:
        console.log("Invalid entry ... Please try again !!!");
        break;
}

