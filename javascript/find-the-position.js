// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested


// creates a hash of the alphabet (didn't want to type each key and value)
// const createAlphabetHash = () => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     const hash = {}

//     for (let i = 0; i < alphabet.length; i++) {
//         hash[alphabet[i]] = i + 1
//     }
//     return hash
// }

// console.log(createAlphabetHash())


const position = letter => {
    let alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25,
        z: 26
      }
      return `Position of alphabet: ${alphabet[letter]}`
}


// alternative using indexOf

// const position = letter => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"

//     return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
// }
console.log(position("a"))