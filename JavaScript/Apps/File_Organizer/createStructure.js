let path = require("path");
let fs = require("fs");

let modules = ["JavaScript", "Browser", "React", "Backend", "Git"];

//process.cwd -> in which folder you are executing your file
//webDev will add within the folder (x) in which you are working
let webDevDirPath = path.join(process.cwd(), "Web Dev");

//create folder/directory
if(fs.existsSync(webDevDirPath)){
    //do nothing
    console.log("Web Dev folder already Exists");
}else{
    fs.mkdirSync(webDevDirPath);
}

//create module inside these
for (let i = 0; i < modules.length; i++) {
    let modulePath = path.join(webDevDirPath, modules[i]);
    if(fs.existsSync(modulePath)){
        console.log(modules[i], "already exists");
    } else{
        fs.mkdirSync(modulePath);
    }
}