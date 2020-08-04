const prompt = require("prompt-sync")();
let mark = parseFloat(prompt("Enter the marks :"));
mark >=50 ? console.log("Passed") : console.log("Failed");