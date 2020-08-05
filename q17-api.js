class Calc{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        let sum = this.num1 + this.num2;
        return sum;
    }
    substraction(){
        let sub = this.num1 - this.num2;
        return sub;
    }
    multiplication(){
        let product = this.num1 * this.num2;
        return product;
    }
    division(){
        let quo = this.num1 / this.num2;
        return quo;
    }

}
module.exports = Calc;