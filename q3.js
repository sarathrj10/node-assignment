const prompt = require("prompt-sync")();
let principle = parseInt(prompt("Enter the principle amount :"));
let rate = parseFloat(prompt("Enter the interest rate :"));
let years = parseFloat(prompt("Enter the number of years :"));
let si =((principle*rate*years)/100);
console.log(`Simple interest : ${si}`)