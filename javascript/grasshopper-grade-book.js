// Grasshopper - Grade Book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

const getGrade = (s1, s2, s3) => {
    let score = (s1 + s2 + s3) / 3
    let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'

    return grade 
}
console.log("A Section:")
console.log(getGrade(95, 90, 93))
console.log(getGrade(100,85,96))
console.log(getGrade(92,93,94))

console.log("\n" + "B Section:")
console.log(getGrade(70,70,100))
console.log(getGrade(82,85,87))
console.log(getGrade(84,79,85))
console.log(getGrade(89,89,90))

console.log("\n" + "C Section:")
console.log(getGrade(70,70,70))
console.log(getGrade(75,70,79))
console.log(getGrade(60,82,76))

console.log("\n" + "D Section:")
console.log(getGrade(65,70,59))
console.log(getGrade(66,62,68))
console.log(getGrade(58,62,70))

console.log("\n" + "F Section:")
console.log(getGrade(44,55,52))
console.log(getGrade(48,55,52))
console.log(getGrade(58,59,60))
