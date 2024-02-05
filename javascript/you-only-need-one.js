// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// Example 1:

// const check = (a, x) => a.includes(x)

// Example 2:

// const check = (a, x) => {
//     let val = a.indexOf(x) !== -1 ? true : false
//     return val
// }

// Submitted

const check = (a, x) => {
    let val = false
    for (let i of a){
        if (i === x) {
            val = true
            break;
        }
    }
    return val
}

console.log(check([66, 101], 66))
console.log(check([101, 45, 75, 105, 99, 107], 107))
console.log(check(['t', 'e', 's', 't'], 'e'))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))
