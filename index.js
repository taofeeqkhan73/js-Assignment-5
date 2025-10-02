// question no-1
let n = 5;
for(let i = 1; i <= n; i++) {
    let row = "";
    for(let j = 1; j <=i; j++) {
        row += "*";
    }
console.log(row);
}
// question no-2


// question no -3
var numbersArray = [1,13,22,123,49];
let sum = 0; 
for(let i = 0; i < numbersArray.length; i++) {
    sum = sum +numbersArray[i];
}
console.log("sum", sum);

// question no-4
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 

let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 

let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < arr_1.length; i++) {
    sum1 = sum1 + arr_1[i];
}
for(let i = 0; i < arr_2.length; i++) {
    sum2 = sum2 + arr_2[i];
}
console.log(`${sum1} + ${sum2} = ${sum1 + sum2}`);
// let total = sum1 + sum2;
// console.log(total);

// question no-5
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let ab = arr.reverse();
console.log(ab);



