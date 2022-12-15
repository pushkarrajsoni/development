// // function name
// // function definition
// // funtion name 
// function fn() {
//     console.log("I am a funtion");
// }

// // funtion invocation -> function call
// let rVal = fn();

// // when you dont return anythinmg froma fn
// // then it will return undefined
// console.log("rVal from fn ", rVal);

function fnwithPar(a, b) {
    console.log(a, " ", b);
    return "return value";

}
fnwithPar(10, 20);
let rVal = fnwithPar("hello", 20);
console.log(rVal);