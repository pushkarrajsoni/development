// folders and files deal

let fs = require("fs"); // (require)nodejs please give me the access of file system module(app)
console.log("before");

let content = fs.readFileSync("readme.txt","utf-8"); //here we have mentioned utf8 to convert hexa decimal binary output into original readable form
console.log(content);  

// ------------------------------For Files----------------------------------

// file -> read, write, create, delete, append, copy

//CREATE
// it creats an empty file
fs.writeFileSync("newFile.txt", "");

//WRITE
//write the content into created file
//if the file already exist -> replace content
// fs.writeFileSync("newFile.txt", "Yes! I am groot");
fs.writeFileSync("newFile.txt", "Yesss! I am groot the boss.");

//APPEND
// it adds the content at the end of the existing content 
fs.appendFileSync("newFile.txt"," I have added something extra");

//DELETE
// it will delete the file which i have made above
fs.unlinkSync("readme.txt"); //unlink sync used because it is actually not not deleting any thing
// it just breaking the link between file and source, so file will disappear

//------------------------------For Folders(Directory)-----------------------

//CREATE
//fs.existSync //-> it is for file and folder both, for checking file or folder alredy existing or not.
fs.mkdirSync("NewFolder");


// //DELETE
fs.rmdirSync("toBeRemovedFolder");

// It is used to synchronously read the contents of a given directory.
let listofThingsInCurrentFolder = fs.readdirSync(__dirname);
console.log(listofThingsInCurrentFolder);

//files and folder -> get
let content1 = fs.readdirSync("G:\\Programming\\development\\JavaScript\\App_With_JS");
console.log(content1);

let content2 = fs.readdirSync("../App_With_JS")
console.log(content2);


//to check whether the path belongs to file or a folder
let randomPath = "G:\\Programming\\development\\JavaScript\\Apps\\App_With_JS\\NewFolder"
let isFile = fs.lstatSync(randomPath).isFile();
let isDirectory = fs.lstatSync(randomPath).isDirectory();
console.log("path belong to file: ",isFile,"folder: ",isDirectory);

//here by using copyFileSync we can only copy the material we can not copy file.  
let srcFilePath = "G:\\Programming\\development\\JavaScript\\Apps\\App_With_JS\\path.js"
let destFilePath = "G:\\Programming\\development\\JavaScript\\Apps\\App_With_JS\\path1.js"
fs.copyFileSync(srcFilePath, destFilePath);
console.log("file content from src copied to dest");