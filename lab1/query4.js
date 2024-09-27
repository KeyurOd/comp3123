function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}


let angle1 = 45;
let angle2 = 90;
let angle3 = 135;
let angle4 = 180;

console.log(findAngleType(angle1)); 
console.log(findAngleType(angle2)); 
console.log(findAngleType(angle3)); 
console.log(findAngleType(angle4));
