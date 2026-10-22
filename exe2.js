let arr = [1,2,3,4,5]

let onlyEvenValues = arr.filter(function(value){
  if(value%2==0){
    return true
  }
  return false
})

console.log(onlyEvenValues)



