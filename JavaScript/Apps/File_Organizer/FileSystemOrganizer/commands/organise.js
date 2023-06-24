let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'tar', 'rar', 'ga', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkd']
}


function organizefn(dirPath) {
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    organizeHelper(dirPath);
}
function organizeHelper(dirPath) {
    // create an organized_dir in dirpath
    let organizeddirPath = path.join(dirPath, "organized_dir");
    let doesorganizedFolderExist = fs.existsSync(organizeddirPath);
    if (doesorganizedFolderExist == false) {
        fs.mkdirSync(organizeddirPath)
    }

    let names = fs.readdirSync(dirPath);
    //checking that is it file or not
    for(let i = 0; i < names.length; i++) {
        let assetPath = path.join(dirPath, names[i]); 
        let ans = isFile(assetPath);
        if (ans == true) {
            let type = getType(assetPath);
            copytothatType(assetPath, types, organizeddirPath);
            //check extname
            
            //and copy the file from clutter to one of the folder inside organized_dir
        }
    }
    // read content of this dirpath.
    // only get the files
    // check extname
    // and copy the file from clutter to one of the type folder inside organozed_dir
}

//checking that does this is belonging to the file or not
function isFile(assetPath) {
    //file or folder
    let ans = fs.lstatSync(assetPath).isFile();
    return ans;
}

//getting extname and its belonging type
function getType(assetPath) { 
    let extname = path.extname(assetPath);
    extname = extname.slice(1);

    for(let key in types) {
        let totalExtension = types[key];
        for(let i=0; i < totalExtension.length; i++) {
            if(totalExtension[i] == extname){
                return key; 
            }
        }
    }
    return "others";
}

// copying the file from source to destination directory
function copytothatType(assetPath, types, organizeddirPath) {
    //organized_dir -> type wala folder create
    let destFolderPath = path.join(organizeddirPath, types);
    if(fs.existsSync(destFolderPath) == false) {
        fs.mkdirSync(destFolderPath);
    }
    let originalName = path.basename(assetPath);
    let destFilePath = path.join(destFolderPath, originalName);
    fs.copyFileSync(assetPath, destFilePath);
    //content copy
    console.log(originalName, " file copied to ",types);
}


module.exports = {
    organizefn: organizefn
}