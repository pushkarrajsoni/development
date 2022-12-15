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
    FirstName : "Steve",
    "Last Name": "Roger",
    friends: ["tony", "peter", "bruce"],
    address: {
        city: "manhattan",
        state: "NY"
    },
    age: 46,
    isAvenger: true, 
}
// console.log(captain);
// console.log(captain.address.city);
// console.log(captain.friends[1]);

// get 
let varName = "FirstName";
console.log(captain[varName]);
varName = "Last Name";
console.log(captain[varName]);     //this is the same as below one
console.log(captain["Last Name"]); 