// Undefined for variable
 let name

 if (name === undefined) {
   console.log('Please provide a name')
 } else {
   console.log(name)
 } // Would print out "Please provide a name"



 // Undefined for function arguments
 // Undefined as function return default value
  let square = function(num){
    console.log(num)
  }

 square() // This would print 'Undefined' as the value is not declared but it is named on the function definition, it will give undefined.

let result = square()
console.log(result) // would also print 'Undefined'
