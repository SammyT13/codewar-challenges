// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder = iterable => {
    // creates an array
        // filter with three arguments (value, index, array)
        // adds to array if first element does not equal the next element
    return ([...iterable]).filter((v, i, a) => a[i] !== a[i +1])
    // Alternative: return ([...iterable]).filter((v, i) => v !== iterable[i + 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))