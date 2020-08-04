const prompt = require("prompt-sync")();
const mark = parseFloat(prompt("Enter the mark :"));
if(mark >= 90){
    console.log("A Grade");
}else if(mark >= 80 && mark <90){
    console.log("B Grade");
}else if(mark >= 70 && mark <80){
    console.log("C Grade");
}else if(mark >= 60 && mark <70){
    console.log("D Grade");
}else if(mark >= 50 && mark <60){
    console.log("E Grade");
}else{
    console.log("Failed");
}




