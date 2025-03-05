// Exclamation Marks Series #1: Remove an exclamation mark from the end of a string

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// used regex to remove exclamation mark
    // the $ is used to analyze the end of given string
const remove = string => string.replace(/!$/,'')

console.log(remove('Hi!')) // Hi
console.log(remove('Hi!!!')) // Hi!!
console.log(remove('!Hi')) // !Hi
console.log(remove('Hi! Hi!')) // Hi! Hi