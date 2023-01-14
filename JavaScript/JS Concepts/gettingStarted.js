// no main
// top to bottom left to right
// print
console.log("Hello Pushkar :) ");
// variable declare;
let a;
// default value -> undefined
// dynamically typed language(js) -> ye btenge ki a ek variable hai
// java -> statically typed lang -> ye batenge ki a variable hai aur kis type ka hai
// int a;
// a me 10 hai
// number
a = 10;
a = 10.1
// boolean
a = true;
// string
a = "hello";
a = 'i am the same'
// null
a = null;
console.log(a);
// primitive stypes -> number, boolean, string, null, undefinec
// node "fileName.js" -> for running the code in node(terminal)

// ************for loop************
// print 1 to 10
for(let i = 1; i<=10; i++){
    console.log("Number is " + i);
}

// ***********while loop -> print even************
let i = 1;
while(i <= 20){
    if(i%2 == 0){
        console.log("Even Number " + i);
    }
    i++;
}

// ******************if else***************
// check from 1 to that endNum(20)
// num is multiple of 3 -> print : Fizz
// num is multiple of 5 -> print : Buzz
//  num is multiple of 3 and 5 -> print : FizzBuzz
// non of these -> print number itself
let endNum = 20;
for(let i = 1; i<=endNum; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}

// for printing even numbers
for(let i = 0; i<=n; i++){
    if(i%2 == 0){
        console.log(i);
    }
}


