// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Submitted
// const comp = (array1, array2) => {
//     // checks if an array is null or undefined or not the same size
//     if (!array1 || !array2 || array1.length !== array2.length) {
//         return false
//     }

//     // sorts the array and squares each value
//     let a = array1.sort((x,y) => x - y).map(val => val * val)
//     // sorts the array
//     let b = array2.sort((x,y) => x - y)

//     // determines if the arrays are the same after being sorted and squared
//     return a.toString().includes(b.toString()) ? true : false
// }

// Refactored and Submitted

const comp = (array1, array2) => {
    // checks if array is null or undefined
    if (!array1 || !array2) {
        return false
    }

    // sorts array, squares array, and converts to string
    let a = array1.sort((x, y) => x - y).map(z => z**2).toString()
    // sorts array and converts to a string
    let b = array2.sort((x, y) => x - y).toString()

    // compares if strings are equal
    return a.includes(b) ? true : false
}

// *** Remember !array.length determines if an array is empty, but empty does not mean null or undefined ***


console.log(comp([], [1,2,3]))
console.log(comp([1,2,3], []))
console.log(comp(undefined, 0))
console.log(comp([], []))
console.log(comp([3,2,1], [1*1,2*2,3*3]))
console.log(comp([4,5,6,7], [1*1,2*2,3*3]))
console.log(comp([4,5,6], [1*1,2*2,3*3,4*4]))
