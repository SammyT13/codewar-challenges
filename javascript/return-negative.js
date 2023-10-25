// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

const makeNegative = num => {
    return num === 0 ? 0 : num < 0 ? num : -num
}

// Alternative: Uses a math method
// const makeNegative = num => -Math.abs(num)


console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))
console.log(makeNegative(-42))
