// Disemvowel Trolls 
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Psuedocode:
// Function Signature:
// Input: string
// Output: string (no vowels)

// Strategy: create a function called disemvowel that accepts a string

// Use the replace method with regex (/[aeiouy]/gi, '')

const disemvowel = (str) => str.replace(/[aeiou]/gi, '')

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel("No offense but, \nYour writing is amoung the worst I've ever read"))
console.log(disemvowel('What are you a communist?'))