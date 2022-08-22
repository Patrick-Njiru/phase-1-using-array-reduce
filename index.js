const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries =
 0
function reducer(batteryBatches) {
    for (const number of batteryBatches) {
        totalBatteries += number
    }
    return totalBatteries
}

console.log(reducer(batteryBatches));
