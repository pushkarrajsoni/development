let fs = require("fs");
let path = require("path");
function treefn(dirPath) {
    // console.log("Tree command executed with the path", dirPath != undefined ? dirPath : process.cwd());
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    console.log(path.basename(dirPath)); //path.basename provide the working folder/file name only not the whole path
    let folderKaContent = fs.readdirSync(dirPath);
    // console.log(folderKaContent);
    for (let i = 0; i < folderKaContent.length; i++) {
        console.log(" > "+folderKaContent[i]);
    }
}

module.exports = {
    treefn: treefn
} 