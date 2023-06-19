/* these are user defined module so we add (./).
here we are accessing the data from lib.js 
for which we have access authority by using require("./lib") */
let clientObj = require("./lib");

console.log("I am client");
//function call
clientObj.libdoc();
//variable
console.log(clientObj.varName);