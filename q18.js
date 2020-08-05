const prompt = require("prompt-sync")();
const wt = parseInt(prompt("Enter the written exam mark :"));
const le = parseInt(prompt("Enter the Lab exam mark :"));
const ass = parseInt(prompt("Enter the Assingnment mark :"));
let average =((.7*wt)+(.2*le)+(.1*ass));
console.log(`Average mark is ${average}`);
