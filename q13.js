const prompt = require("prompt-sync")();
let str = prompt("Enter the String : ");
let reverse = reverseString(str);
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
if(str === reverse){
    console.log("String is Pallindrome");
}else{
    console.log("String is not Pallindrome");
}
