// Switch it Up!

// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// const switchItUp = number => {

//     switch (number) {
//         case 0:
//             return "Zero"
//         case 1:
//             return "One"
//         case 2:
//             return "Two"

//         case 3:
//             return "Three"
//         case 4:
//             return "Four"
//         case 5:
//            return "Five"
//         case 6:
//            return "Six"
//         case 7:
//             return "Seven"
//         case 8:
//             return "Eight"
//         case 9:
//             return "Nine"
//         default:
//             return "Unknown Number"
//     }
// }

// Alternative: using an matrix
// const switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

// Alternative: using array and index (number)

// function switchItUp(number){
//     var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     return words[number];
//   }

// Alternative: using objects

const switchItUp = number => {
    const numToString = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    return numToString[number]
}

console.log(switchItUp(0))
console.log(switchItUp(3))
console.log(switchItUp(5))

