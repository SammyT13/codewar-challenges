//Write a function that removes the spaces from the string, then return the resultant string.

// Replace method with regex
const noSpace = x => x.replace(/ /g, '')


// Split & Join method
//const noSpace = x => x.split(' ').join('')

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))