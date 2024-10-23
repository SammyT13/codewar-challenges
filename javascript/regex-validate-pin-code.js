// Regex Validate PIN Code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


const validatePin = pin => {
    // regex below validates the lenght of the string to either 4 or 7
    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePin("1234"))
console.log(validatePin("12"))
console.log(validatePin(""))
console.log(validatePin("123456"))
console.log(validatePin("12345678"))
