const countSheeps = (sheep) => {
    let count = 0
    
    return sheep.filter(value => !!value).length

    // second method to count truthy
    // sheep.map(value => {
    //     if(!!value) count++
    // })

    // third method to count truthy
    // for(let n of sheep) {
    //   if(!!n){
    //     count += 1
    //   }
    // }
//   return count
}

console.log(countSheeps([undefined,true, true]))