//these are user defined module so we add (./)
let clientObj = require("./lib");

console.log("I am client");
//function call
clientObj.fn();
//variable
console.log(clientObj.varName);