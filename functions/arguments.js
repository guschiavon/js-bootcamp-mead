let total = 300

let calcTip = function (total, tipPercent = .2) {
    let tipAmount = total * tipPercent
    return tipAmount
    console.log(`Your tip on ${total} would be ${tip}`)
}
let tip = calcTip(total)

//
// let myFunction = function (argument1 = 'Default Argument', argument2 = 'Another Default') { // Where argument is input
//   let result = 'First argument: ' + argument1 + ' Second Argument: ' + argument2
//   return result // Output
// }
//
// console.log(myFunction(undefined, 'Hit the fan'))
