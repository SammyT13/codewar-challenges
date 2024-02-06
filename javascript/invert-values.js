// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// Sumbmitted

const invert = array => {
    if (!array.length) {
        return array
    }
    else {
        return array.map(x => x * -1)
    }
}

// Example 1:

// const invert = array => {
//     return array.map(x => x === 0 ? x : -x)
// }

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))