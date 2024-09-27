function swaping(str) {
    if (str.length < 3) {
        return "String length must be greater than or equal to three.";
    }
    
    let lastThreeChars = str.slice(-3);
    let remainingString = str.slice(0, -3);
    
    return lastThreeChars + remainingString;
}

let inputString = "Keyur";
let result = swaping(inputString);
console.log(result);
