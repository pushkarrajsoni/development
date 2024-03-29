 //is folder created or not
 let fs = require("fs");
 let path = require("path");

 // for taking input from user
 let input = process.argv.slice(2);

 // handle input case
 let moudleName = input[0];
 let numberOfFolder = input[1];

 // making path within current working directory.
 let modulepath = path.join(process.cwd(), "Web Dev", moudleName); // moduleName -> example ["javaScript", "React"] from createStructure.js
 
 //Check whether the given directory exists or not.
 if(fs.existsSync(modulepath)) {
    console.log(modulepath, "already exists")
 }else {
    fs.mkdirSync(modulepath);
 }

 //files creation
 for (let i = 1; i <= numberOfFolder; i++) {
    let lectureName = "Lecture-" + i;
    //path -> string
    let lecturePath = path.join(modulepath, lectureName);
    if (fs.existsSync(lecturePath)) {
        console.log(lectureName, "already Exists");
    } 
    else {
      // actual creation directory
        fs.mkdirSync(lecturePath);
    }
 }