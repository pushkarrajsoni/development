 //is folder created or not
 let fs = require("fs");
 let path = require("path");

 let input = process.argv.slice(2);

 // handle input case
 let moudleName = input[0];
 let numberOfFolder = input[1];

 let modulepath = path.join(process.cwd(), "Web Dev", moudleName);
 if(fs.existsSync(modulepath)) {
    console.log(modulepath, "already exists")
 }else {
    fs.mkdirSync(modulepath);
 }

 //files create
 for (let i = 1; i <= numberOfFolder; i++) {
    let lectureName = "Lecture-" + i;
    //path -> string
    let lecturePath = path.join(modulepath, lectureName);
    if (fs.existsSync(lecturePath)) {
        console.log(lectureName, "already Exists");
    } 
    else {
        fs.mkdirSync(lecturePath);
    }


     //create file -> file wala code
    let filepath = path.join(lecturePath, "readme.md");
    if (fs.existsSync(filepath)) {
       console.log("Already Exists");
    } else {
       fs.writeFileSync(filepath, "");
    }
 }