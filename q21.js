const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter the array size :"));
var array1 = new Array();
var result = new Array();
console.log("Enter the elements of the array :");
for(var i = 0; i <= size ;i++){
    array1[i] = parseInt(prompt());
}
//mutiplying
for(var i=0,j=i+1; i< size ;i++,j++){
    result[i] = array1[i] * array1[j];
}
//result array
console.table(result);

