// Find the Unique Number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


const findUniq = array => {
    let frequency = new Map()

    // iterates over array
    array.map((i) => {
        // counts frequency of value
        let count = (frequency.get(i) || 0) + 1
        // sets the object
        frequency.set(i, count)
    })

    // iterates over map
    for (let [k, v] of frequency) {
        // finds the frequency of 1
        if (v === 1) {
            return k
        }
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))