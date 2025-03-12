// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = name => {
    let array = name.split(" ")

    return `${array[0].charAt(0).toUpperCase()}.${array[1].charAt(0).toUpperCase()}`

    // a more conscise method from the above attempt
    // return name.split(' ').map(name => name[0].toUpperCase().joint('.'))

    // using regex
    // \b looks for boundaries of each word, \w captures all alphanumeric characters
    // together they capture the first character after a word boundary, in other words the first character of each word, and g repeats this for all words
    // return name.match(/\b\w/g).join('.').toUpperCase()
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("patrick feeney"))