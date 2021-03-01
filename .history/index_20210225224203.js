function superbowlWin (record) {
    return record.result == `W`
}

function superbowlWin () {
    document.getElementsByName(result).innerHTML =records.find(superbowlWin);
}


// function superbowlWin (record) {
//     const found = record.find(result => result == `W`);
// }
// console.log(result); 