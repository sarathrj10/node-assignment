const prompt = require("prompt-sync")();
class Test{
    constructor(){
        this.array1 = new Array(2);
        for (var i = 0; i < this.array1.length; i++) { 
            this.array1[i] = new Array(2); 
        } 
    }
    getArray(){
        console.log("Enter the elements of 1st 2-D array :")
            for (var i = 0; i < 2; i++) { 
            for (var j = 0; j < 2; j++) { 
                this.array1[i][j] = parseInt(prompt()); 
            } 
        } 
    }
    displayArray(){
        console.table(this.array1);
    }
}
function main(){
    const obj = new Test();
    obj.getArray();
    obj.displayArray();
}
main();