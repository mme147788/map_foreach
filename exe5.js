
let str = "My String"

function capitalize(str) {
    let capitalizeArr = [...str].map(function (note) {
        return note.toUpperCase()
    })

    return capitalizeArr.join("")
}

console.log(capitalize(str))

// A more simple solution
function capitalize2(str) {
    return str.toUpperCase();
}

console.log(capitalize2(str))