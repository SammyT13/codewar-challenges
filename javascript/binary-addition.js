// Binary Addition 

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// Psuedocode

// Function Signature
// Input: numbers
// Output: string

// Strategy: create function addBinary that adds two numbers a,b together and returns their sum in binary

// Could use .toString method and use 2 as an argument to return a binary string
    // .toString method won't return negative numbers to binary
    // could shift the number by 0 bit >>>
    // sum >>> 0
    // would probably create an if statment if sum is negative

// Submitted
// const addBinary = (a,b) => {
//     let decimalSum = a + b

//     let binary = decimalSum.toString(2)

//     return binary
// }

// Alternate Method
const addBinary = (a,b) => {
    let sum = a + b
    let binary = ''

    while (sum > 0) {
        binary = sum % 2 + binary
        sum = Math.floor(sum / 2)
    }
    return binary
}

console.log(addBinary(1,1))
console.log(addBinary(5,9))



