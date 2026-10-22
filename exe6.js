let str = "absdafzABGZ"

let shiftLetters = [...str].map(function (letter) {
    if (letter === 'Z') {
        return 'A'
    }
    else if (letter === 'z') {
        return 'a'
    }
    return String.fromCharCode(letter.charCodeAt(0) + 1)

}).join("")

console.log(shiftLetters)