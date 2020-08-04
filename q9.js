const prompt = require("prompt-sync")();
const limit = parseInt(prompt("Enter the limit :"));
let temp="\n";
for(var i = 1; i <= limit; i++){
    for(var j=1; j <= i; j++){
        temp +=` ${j}`;
    }
    temp+="\n";
}
console.log(temp);