const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number :"));
let product;
for(var i=1;i <= 10 ; i++){
    product = i * num;
    console.log(`${i} X ${num} = ${product}`);
}