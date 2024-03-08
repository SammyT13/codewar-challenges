// Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Psuedocode:
// Function Signature:
// Input: string
// Output: string

// Strategy: create a function called dnaStrand which accepts a string called dna
// create an object with (k,v) of DNA to RNA
// use dna.replace(searchVal, newvalue) method
    // regex /A|T|G|C/g
    // use a function as a replacer method (newvalue)

// Submitted

const dnaStrand = dna => {
   let rnaObj = {A: 'T', T: 'A', G: 'C', C: 'G'}

   return dna.replace(/A|T|G|C/g, rna => rnaObj[rna])
}

// Method below uses switch

// const dnaStrand = dna => {
//  
//     var rna = "";
//     for(var i=0; i<dna.length; i++) {
//       switch(dna[i]) {
//         case 'A':
//           res += "T";
//           break;
//         case 'T':
//           res += "A";
//           break;
//         case 'G':
//           res += "C";
//           break;
//         case 'C':
//           res += "G";
//           break;
//       }
//     }
//     return rna
//   }

console.log(dnaStrand("AAAA"))
console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))