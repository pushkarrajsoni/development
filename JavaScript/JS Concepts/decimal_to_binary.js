// write code to print binary value of any number.

function decimalToBinary(dec) {
    let power = 1;
    let bin = 0;
    while (dec != 0) {
        let fv = dec % 2; // fv(facevalue) = remainder
        bin = bin + fv * power; // bin = binary number
        power = power * 10;
        dec = Math.floor(dec/2); // dec = decimal
    }
    return bin;
}
let binaryNumber = decimalToBinary(13);
console.log(binaryNumber); 