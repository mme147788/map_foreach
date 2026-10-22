
let str = "Hello world. My name is Miri"

function capitalize(str) {
    return str.toUpperCase();
}


console.log(capitalize(str))

let swapCase = str.split(" ").map(function (word, index) {
    if (index % 2 !== 0) {
        return capitalize(word)
    }
    else{
        return word
    }
}).join(" ")

console.log(swapCase)