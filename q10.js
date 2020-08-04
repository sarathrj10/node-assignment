const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter the size of array :"));
var array1 = new Array();
var array2 = new Array();
var temp = new Array();
console.log("Enter the elements of Array 1 :");
for(var i = 0; i < size ; i++){
    array1[i] = parseInt(prompt());
}
console.log("Enter the elements of Array 2 :");
for(var i = 0; i < size ; i++){
    array2[i] = parseInt(prompt());
}
//swaping
temp = array1;
array1 = array2 ;
array2 = temp;

console.log("Array after Swapping : \n\n Array 1 :");
console.table(array1);
console.log("Array 2 :");
console.table(array2);