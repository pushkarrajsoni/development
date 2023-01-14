// it is the collection of elements or collection of anythings
let arr = ["Rajneesh", "Ram", "Shyam", "David"];
console.log(arr);
// print
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1]);
// for (let sidx = 0; sidx < arr.length; sidx++) {
//     console.log(sidx);
//     console.log(arr[sidx]);
// }

// *****************last****************
// add
arr.push("aman");
arr.push("Subh");
console.log("...............................................");
console.log(arr);
// remove
arr.pop();
console.log("..................................................");
console.log(arr);

// ************************Starting*************************
// add
arr.unshift("Bruce");
arr.unshift("Tony");
console.log("....................................................");
console.log(arr)
//remove
arr.shift();
console.log("................................................");
console.log(arr);


// write a JavaSript program to compute the union
// of two arrays. Inpput array will only have unique elements 
// in there respective array.
// Input arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]
// Output: [1, 2, 3, 100, 10]
// slice and splice 
// indexof and includes
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
for(let i = 0; i < arr1.length; i++){
    let elementToPut = arr1[i];
    let isPresent = false;
    for(let j = 0; j< arr2.length; j++){
        if(elementToPut  == arr2[j]){
            isPresent = true;
        }
    }

    if(isPresent == false){
        arr2.push(elementToPut);
    }
}
console.log(arr2);