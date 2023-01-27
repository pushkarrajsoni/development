// // folders and files deal

let fs = require("fs");
// console.log("before");

// let content = fs.readFileSync("readme.txt","utf-8"); //here we have mentioned utf8 to convert binary output into original readable form
// console.log(content);  

//---------------------------For Files---------------------------

// //file -> read, write, create, delete, append, copy

// //CREATE
// // it creats an empty file
// fs.writeFileSync("newFile.txt", "");

// //WRITE
// //write the content into created file
// //if the file already exist -> replace content
// // fs.writeFileSync("newFile.txt", "Yes! I am groot");
// fs.writeFileSync("newFile.txt", "Yesss! I am groot the boss.");

// //APPEND
// // it adds the content at the end of the existing content 
// fs.appendFileSync("newFile.txt"," I have added something extra");

// //DELETE
// // it will delet the file which i have made above
// fs.unlinkSync("readme.txt");

//------------------------------For Folders/Directory-----------------------

// //CREATE
// //fs.existSync //-> it is for file and folder both
// fs.mkdirSync("NewFolder");


// //DELETE
// fs.rmdirSync("toBeRemoved");

// //files and folder -> get
// let content = fs.readdirSync("G:\\Programming\\development\\JavaScript\\App_With_JS");

let content = fs.readdirSync("../App_With_JS")
console.log(content);