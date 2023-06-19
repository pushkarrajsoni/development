function LibFn() {
    console.log("I am Lib fn");
}

function Inner() {
    console.log("I am Inner");
}

let a = 10;
//in javascript we can only send function and variable to another files
//we can't send the whole file

//here node js helps us by making a module which exports the defined functions

module.exports = {
    libdoc: LibFn,
    varName: a 
}