const prompt = require("prompt-sync")();
const limit = parseInt(prompt("Enter the limit :"));
let temp =1;
let str="\n";
for(var i = 1; i<= limit ; i++){
    for(var j = 1 ; j <= i;j++){
        str +=` ${temp}`;
        temp++;
    }
    str +="\n";
}
console.log(str);