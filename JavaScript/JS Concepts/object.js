// // rough
// console.log("before");
// function fn(inp) {
//     console.log(inp);
//     return "hello";
// }
// let rVal = fn(10);
// console.log(rVal);
// console.log("b/w");

// fn("hello");
// console.log("after");

// it is non-primituve datatype that is used to represent anything
// empty object creation
// let obj = {
    
    // };
    // collection of key:value pair,
    // key : string or number & value : amy valid js datatype
    
let captain = {
    firstName : "Steve",
    LastName: "Roger",
    friends: ["tony", "peter", "bruce"],
    address: {
        city: "manhattan",
        state: "NY"
    },
    age: 46,
    isAvenger: true, 
}
// console.log(captain);
console.log(captain.address.city);
console.log(captain.friends[1]);