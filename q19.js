const prompt = require("prompt-sync")();
const income = parseInt(prompt("Enter the annual income :"));
let tax = 0;
if(income <= 250000){
    console.log("No Tax");
}else if(income >= 250000 && income <= 500000){
    tax = (.05*income);
    console.log(`Tax is ${tax}`);
}else if(income >= 500000 && income <= 1000000){
    tax = (.2*income);
    console.log(`Tax is ${tax}`);
}else if(income >= 1000000 && income <= 5000000){
    tax = (.3*income);
    console.log(`Tax is ${tax}`); 
}else{
    tax = (.3*income);
    console.log(`Tax is ${tax}`); 
}