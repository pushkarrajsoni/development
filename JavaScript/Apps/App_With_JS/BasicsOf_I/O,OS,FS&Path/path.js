 
const { copyFileSync } = require("fs");
let path = require("path");
 
// "G:\\Programming\\development\\JavaScript\\App_With_JS"; -> absolute Path 
// ..\App_With_JS\operatingSystem.js -> Relative path
// "toBeRemoved" -> (filename)When you are in the same folder


//Path Module
console.log(__dirname); //current folder in which we have our js file absolute path
console.log(__filename); //current file ka path

//abhi ye script app me convert hone ke baad ki path pe chal rahi hai
//file kis folder me execute kar rhi hai 
console.log(process.cwd()); //it is showing current working directory, provides the location of working directory



let folderName = "G:";
let nextFolderName = "Movie";
let childFolder = "bollywood";
let actualFile = "Bhaag milkha Bhaag.mp4";

//path joining
let address = path.join(folderName, nextFolderName, childFolder, actualFile);
console.log(".....................................................");
console.log(address);


//other extension
// path.extname(); // gives only the working folder/file name not whole path.
let extname = path.extname(address);
console.log("extname ", extname);

// path.basename(); // provides the name of the last file pr folder name of the path
let basename = path.basename(address);
console.log("basename" ,basename);