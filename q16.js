const prompt = require("prompt-sync")();
const num =parseInt(prompt("Enter a number :"));
let temp=0;
for(var i=1;i<=num;i++){
    if(num % i == 0){
        temp++;
    }
}
temp > 2 ? console.log("Number is not prime") : console.log("Number is prime");