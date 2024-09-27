function firstCapital(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

let sentence = "my name is keyur.";
let capitalWord = firstCapital(sentence);
console.log(capitalWord); 
