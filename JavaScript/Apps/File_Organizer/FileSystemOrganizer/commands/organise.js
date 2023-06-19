function organizefn(dirPath) {
    console.log("Organise command executed", dirPath != undefined ? dirPath : process.cwd());
}
module.exports = {
    organizefn: organizefn
}