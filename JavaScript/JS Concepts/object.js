// //{ just concept rough
// console.log("before");
// function fn(inp) {
//     //console.log(inp);
//     return "it will return whatever we write here.";
// }
// // let rVal = fn(15);
// // console.log(rVal);
//        //OR
// fn(15); 
// // both above are same

// console.log("b/w");
// fn("hello"); //it will not going to print because we have not called it.
// console.log("after");
// //}


// // <---------------objects from here------------------>
// // it is non-primituve datatype that is used to represent anything
// // empty object creation
// // let obj = {

//     // collection of key:value pair,
//     // key : string or number & value : any valid js datatype
    
//     // };
    
// let captain = {
//     FirstName: "Steve",
//     "Last Name": "Roger",
//     friends: ["tony", "peter", "bruce"],
//     address: {
//         city: "manhattan",
//         state: "NY"
//     },
//     age: 46,
//     isAvenger: true
// }
// // .....................get a key's value using dot notation........................
// // console.log(captain);
// // console.log(captain.address.city);
// // console.log(captain.friends[1]);

// // .......................................traverse..................................
// for(let key in captain) {
//     console.log(captain[key])
//     console.log(key, " : ", cap[key])
// }

// // ........................................get......................................
// let varName = "FirstName";
// console.log(captain[varName]);
// varName = "Last Name";
// console.log(captain[varName]);     //this is the same as below one
// console.log(captain["Last Name"]); 

// // ......................................delete.....................................
// delete captain.friends;

// // .......................................add.......................................
// captain.movie = ["Winter Soldier", "First Avenger", "Civil War"];
// let key1 = "comp"
// captain[key1] = "DCU";

// // .....................................Upadte......................................
// captain.isAvenger = false;
// console.log(captain);


//  ......................differnce b/w dot and sqaure[]............................

let obj = {
    name: "Pushkar",
    age: 23
}

console.log(obj.name);
let key2 = "name";

// variable -> value get -> then searching
console.log(obj[key2]);

function getValue(key3) {
    console.log(obj.key3); // dot is used for exact matching of values
    console.log(obj[key3]); // while [] is getting all the values within the key variable
}

getValue("name");
getValue("age");