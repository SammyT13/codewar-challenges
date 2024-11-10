// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
    // split both s1 & s2 into an array, used spread operator to combine array, then sorted
    let sortedArray = [...s1.split(""), ...s2.split("")].sort()

    // created new set of array with no duplicates then join to a string
    return [...new Set(sortedArray)].join("")

}

// Alternative: using a one line can combine the above to this:

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("")

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
console.log(longest("aretheyhere", "yestheyarehere"))