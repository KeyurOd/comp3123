function findLargestNumber(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = 123;
let num2 = 326;
let num3 = 1;

let largeNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number is: ${largeNumber}`);
