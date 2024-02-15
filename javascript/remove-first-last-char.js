// Remove First and Last Character 
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

const removeChar = str => str.slice(1, (str.length-1))

// Instead of using str.length - 1, we could use -1 by itself


console.log(removeChar('eloquent'))