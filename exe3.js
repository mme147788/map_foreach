let arr = ['a', 'b', 'c', 'd']

let strings = arr.filter(function (value) {


    return typeof value === "string"
})


let showFirstAndLast = strings.filter(function (value, index) {
    return index === 0 || index === strings.length - 1
}
)


console.log(showFirstAndLast)


