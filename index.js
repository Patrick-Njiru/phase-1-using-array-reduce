const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries =
//  0
// function reducer(batteryBatches) {
//     for (const number of batteryBatches) {
//         totalBatteries += number
//     }
//     return totalBatteries
// }

// console.log(reducer(batteryBatches));



let totalBatteries = 0

 const reducer = batteryBatches => {
    totalBatteries = batteryBatches.reduce (((accumulator, currentValue) => accumulator + currentValue), 0)
    return totalBatteries
 }

console.log(reducer(batteryBatches));