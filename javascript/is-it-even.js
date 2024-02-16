// Is it even?
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// Psuedocode:
// Function Signature
// Input: Numbers (positive, negative, integers, or floats)
// Ouput: true or false

// Strategy: Create a function called testEven, that passes a number n

// create an if statement
    // use % 2 (modulo of 2) to determine if number is even

const testEven = n => n % 2 === 0 ? true : false

console.log(testEven(0))
console.log(testEven(0.5))
console.log(testEven(1))
console.log(testEven(2))
console.log(testEven(-4))
console.log(testEven(4.2))
console.log(testEven(0.4))

