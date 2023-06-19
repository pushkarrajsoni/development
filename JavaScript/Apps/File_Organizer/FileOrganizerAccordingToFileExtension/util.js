let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'tar', 'rar', 'ga', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkd']
}
let path = require("path");
function returnFolderName(fileName) {
    let extname = path.extname(fileName);
    extname = extname.slice(1);
    for(let key in types) {
        let totalExtension = types[key];
        for(let i=0; i<totalExtension.length; i++) {
            if(totalExtension[i] == extname){
                console.log(key);
                return; 
            }
        }
    }
    console.log("others");


}
returnFolderName("resume.docx"); //-> file output - document
returnFolderName("xyz.abc"); //-> file output - others

//organize
            // origanizedFiles
            //         media
            //         archives
            //         document
            //         app
            //         other