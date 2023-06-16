// function definition
// function name
function fn() {
    console.log("I am a funtion");
    // this is optional return type
}
// funtion invocation -> function call
let returnVal = fn();
/*when you don't return anything from a fn
then it will return undefined */
console.log("returnVal from fn ", returnVal);


// .......................... implimenttation of fn.............................
function fnwithPar(a, b) {
    console.log(a + b); //console is used for to check the values and print the values just for to show that what it is holding
    return [a, b]; //it is stoping the execution and returning the value 

}
// fnwithPar(10, 20);
let rVal = fnwithPar(30 , 20);
console.log("gg",rVal); //just for checking and printing values
console.log(rVal); //just printing the rval value to check
// fnwithPar(20, 75);