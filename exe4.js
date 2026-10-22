let str = "MiriZOHARYYGFFFDSKKKKaaaoouuyuuu"




function vowelCount(str) {

    let upperCase = [...str].map(function (value) {
        return value.toUpperCase()
    })

    let vowels = upperCase.filter(function (value) {

        if (
            value === 'O' ||
            value === 'A' ||
            value === 'E' ||
            value === 'I' ||
            value === 'U') {
            return true
        }
        return false
    })

    let vowelCountObj = {}

    for (let i = 0; i < vowels.length; i++) {
        let exist = Object.keys(vowelCountObj).includes(vowels[i]);
        if (!exist) {

            let count = 1

            for (let j = i + 1; j < vowels.length; j++) {
                if (vowels[i] == vowels[j]) {
                    count++
                }
            }

            vowelCountObj[vowels[i]] = count;
        }



    }

    return vowelCountObj;
}




console.log(vowelCount(str));