const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter the size of array :"));
var array1 = new Array();
console.log("Enter the elements of Array :");
for(var i = 0; i < size ; i++){
    array1[i] = parseInt(prompt());
}
//number of even numbers
let temp = 0;
for(var i = 0; i < size ; i++){
    if(array1[i] % 2 == 0){ temp++};
}
console.log(`Number of even numbers in the array is ${temp}`);