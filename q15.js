const prompt = require("prompt-sync")();
function main(){
    var array1 = new Array();
    const size = parseInt(prompt("Enter the size of array :"));
    array1 = getArray(size);
    displayArray(array1);
}
function getArray(size){
    var array2 = new Array();
    console.log("Enter the elements of Array :");
    for(var i = 0; i < size ; i++){
    array2[i] = parseInt(prompt());
    }
    return array2;
}
function displayArray(array){
   console.table(array);
}
main();