const prompt = require("prompt-sync")();
//first array input
var array1= new Array(2);
for (var i = 0; i < array1.length; i++) { 
    array1[i] = new Array(2); 
} 
console.log("Enter the elements of 1st 2-D array :")
for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 2; j++) { 
        array1[i][j] = parseInt(prompt()); 
    } 
} 
//second array input
var array2= new Array(2);
for (var i = 0; i < array2.length; i++) { 
    array2[i] = new Array(2); 
} 
console.log("Enter the elements of 2nd 2-D array :")
for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 2; j++) { 
        array2[i][j] = parseInt(prompt()); 
    } 
} 
//sum array
var sum= new Array(2);
for (var i = 0; i < sum.length; i++) { 
    sum[i] = new Array(2); 
} 
//finding sum
for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 2; j++) { 
        sum[i][j] = array1[i][j] + array2[i][j]; 
    } 
} 
//displaying sum array
console.log("Sum of array :");
console.table(sum);