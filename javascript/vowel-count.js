// Vowel Count 
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Psuedocode:
// Function Signature
// Input: string
// Output: number

// Strategy: create a function called getCount that accepts a string (str) as a parameter

// In the function:
    // create a variable to hold count: let count
    // create regex pattern: [aeiou]
    // for loop of str
    // if statement to match pattern
        // count++ for every match

const getCount = str => {
    // initiate count to 0
    let count = 0
    // create regex pattern with global search and ignore case sensitivity
    let vow = /[aeiou]/gi

    // loops through string
    for (let i of str) {
        // use match method to match pattern and count
        if (i.match(vow)) {
            count++
        }
    }
    return count 
}

console.log(getCount("abracadabra"))
// returns 5

// Example 2:
    // Below I could just use a regex pattern with two methods 
        // First method: match - it will match the designated regex pattern
        // Second method: length - will get the length of the matched pattern

// const getCount = str => str.match(/[aeiou]/gi).length

// console.log(getCount("abracadabra"))
// returns 5