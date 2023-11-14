// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = x => {
    return x.split('').map(val => val < 5 ? 0 : 1).join('')
}

// Another way of solving

// const fakeBin = x => {
//     let bin = []

//     x.split('').map((val) => val < 5 ? bin.push(0) : bin.push(1))

//     return bin.join('')
// }

console.log(fakeBin('45385593107843568'))