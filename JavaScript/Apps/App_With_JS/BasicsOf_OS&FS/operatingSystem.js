// (require)nodejs = please give me the access of the operating system module(app)
let os = require("os");

//which architecture(bit) is installed
console.log(".........................................................");
console.log(os.arch());

//give data about your cpus
console.log(".........................................................");
console.log(os.cpus());

//give data about networking
console.log(".........................................................");
console.log(os.networkInterfaces());

//which os is installed
console.log(".........................................................");
console.log(os.platform());