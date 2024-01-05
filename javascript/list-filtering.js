// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// const filterList = (arr) => {
//     return arr.filter(val => typeof val === 'number')
// }

const filterList = list => list.filter(val => typeof val === 'number')

console.log(filterList([1,2,'a','b']))