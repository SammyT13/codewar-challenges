// Get Character from ASCII Value 

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

const getChar = c => {
    return String.fromCharCode(c)
    // charCodeAt gives you the ASCII value 
}

console.log(getChar(65))