




function superbowlWin (){
    let bigDub = record.find((win) => {
    console.log(win)
    console.log(win.result == `W`)
    if (win.result ==`W`) {
      return win.result
    }   
    else return undefined
      })
      return bigDub.year
}



    console.log(superbowlWin());







 

//  function superbowlWin (arrayZ) {
//    const hugeW = record.find((win) => {
//    return win.result == `W`
//  })}
 
//     console.log(superbowlWin())

// console.log(bigDub) 



 // function superbowlWin (dub) {
//   return dub.result === `W`;
// }

// console.log(record.find(superbowlWin).year) 

// const superbowlWin = bigDub => {
//   record.find((record.result === `W`)
//   return record.result === `W`
// })
  
// console.log(superbowlWin(record))