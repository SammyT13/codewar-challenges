// Count the Divisors of a Number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


// This method is not efficient
// Need to research to find a more efficient algorithm

const getDivisorCnt = n => {
    let divisor = 0
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        divisor += 1
      }
    }
    return divisor
  }



  console.log(getDivisorCnt(1))
  console.log(getDivisorCnt(10))
  console.log(getDivisorCnt(11))
  console.log(getDivisorCnt(54))