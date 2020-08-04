const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter the size of array :"));
var array1 = new Array();
console.log("Enter the elements of Array :");
for(var i = 0; i < size ; i++){
    array1[i] = parseInt(prompt());
}
//sorting
array1.sort(function(a, b){return b - a});
//displaying
console.log("Array after sorting :");
console.table(array1);