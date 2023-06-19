//
// 1. take an input
//nodejs cli.js help -> print help command executed
//nodejs cli.js tree -> print tree command executed
//nodejs cli.js organize -> print organize command executed
let helpfnObj = require("./commands/help");
let treefnObj = require("./commands/tree");
let organizefnObj = require("./commands/organise");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
// console.log(dirPath);


switch (command) {
    case "help":
        helpfnObj.helpfn();
        break;
    case "tree":
        treefnObj.treefn(dirPath);
        break;
    case "organize":
        organizefnObj.organizefn(dirPath);
        break;
    default:
        console.log("Wrong command. Type help to see the list of all the commands")
} 