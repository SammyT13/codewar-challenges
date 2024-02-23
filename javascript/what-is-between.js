// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Psuedocode:
// Function Signature:
// Input: two numbers
// Ouput: an array of numbers

// Strategy: create a function called between, that passes two numbers a and b

const between = (a, b) => {
    // create an empty array
    let arr = []

    // iterate between a and b
    // push each value betwen a and b to arr
    for (a; a <= b; a++) {
        arr.push(a)
    }
    return arr
}

console.log(between(1, 4))
console.log(between(-2, 2))