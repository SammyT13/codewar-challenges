// Snail

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// Used recursion instead of a while loop

const snail = array => {
    // intialize an empty array
    let result = []

    if (array.length === 1) {
        return array[0]
    }
    else if (array.length === 0) {
        return []
    }
    else {       
        // adds the first sub-array[0] (left, right)
        result.push(...array.shift())

        // travel down to pop the last elements of each sub-array to push into result  (down)
        for (let i = 0; i <= array.length - 1; i++) {
            result.push(array[i].pop())
        }
        // adds the last sub-array in reverse order
        result.push(...array.pop().reverse())

        // travel up to shift the first element of each sub-array to push into result (left, up, right)
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift())
        }
        // calls itself
        result.push(...snail(array))
        return result
    }
}

console.log(snail([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))
console.log(snail([[]]))
console.log(snail([[1]]))
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))