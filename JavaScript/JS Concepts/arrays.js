// array is the collection of elements or collection of anythings
let arr = ["Rajneesh", "Ram", "Shyam", "David"];

// print
// console.log(arr);
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1]);

for (let sidx = 0; sidx < arr.length; sidx++) { //sidx -> starting index
    console.log(sidx);
    console.log(arr[sidx]);
}

// *****************executing at last****************
// add
arr.push("aman");
arr.push("Subh");
console.log("...............................................");
console.log(arr);
// remove
arr.pop();
console.log("..................................................");
console.log(arr);

// ************************executing at Starting*************************
// add
arr.unshift("Bruce");
arr.unshift("Tony");
console.log("....................................................");
console.log(arr)
//remove
arr.shift();
console.log("................................................");
console.log(arr);

// *******************************copied a subarray*************************
// slice and splice 
let a = [10, 23, 43, 45, 76, 90];
let spliceArray = a.splice(2, 3);
console.log(spliceArray); /* splice in removing subarray with the index+1 (2, 4)
so here we have given the index 4 but it will remove till 5th index */

console.log(a);

let sliceArray = a.slice(2, 4);
console.log(sliceArray); /* in slice the subarray will be giving will not
includ given index, it will give subarary till idex-1 (2, 4) 
so it will print till 3rd index. */

// ******************************indexof and includes*****************************
let idx = a.indexOf(23); // it will return the index if available the element if not then return -1.
let ans = a.includes(3); // it will check the element and return true or false that element is available or not.

/* write a JavaSript program to compute the union
of two arrays. Input array will only have unique elements 
in there respective array.
Input arr1 = [1, 2, 3]
Input arr2 = [100, 2, 1, 10]
Output: [1, 2, 3, 100, 10]   */
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