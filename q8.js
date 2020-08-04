const prompt = require("prompt-sync")();
const limit = parseInt(prompt("Enter the limit :"));
let sum=0;
for(var i=1; i<= limit ; i++){
    if(i% 2 != 0){
        sum +=i;
    }
}
console.log(`Sum of Odd numbers : ${sum}`);