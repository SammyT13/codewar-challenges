// Square(n)Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// Psuedocode:
// Function Signature:
// Input: Numbers (arrays)
// Output: The square of each number and sum the results

//Strategy: create a function called squareSum, that passes numbers (even arrays)

// if statement
    // determine if it's an empty array
    // if empty return 0
// else
    //Use map method to square numbers, and then reduce method to sum the numbers

// This function takes into account for nested arrays
// const squareSum = (...numbers) => {
//     if (!numbers.flat().length) {
//         return 0
//     }
//     else {
//         return numbers.flat().map(val => val**2).reduce((accum, curr) => accum + curr, 0)
//     }
// }

// Submitted
    // This function doesn't consider nested arrays
const squareSum = (numbers) => {
    return numbers.reduce((a, c) => a + (c**2), 0)
  }
console.log(squareSum([1,2,3], 0, 3))
console.log(squareSum([]))
console.log(squareSum([1, 2]))