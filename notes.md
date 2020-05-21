# Notes from JavaScript bootcamp - Andrew Mead (Udemy)

## JS Syntax

JS syntax allows for _optional_ inserting a semi-colon at the end of the statement.

## Section 3: Data Types & Flow

### Boolean
Simple `true` and `false` statements to control output.

### Variables
Variables are a way to store values for later. In JS, the reserved word for the variable is `let`. In a basic example:
```
let name = 'Lucy Fer'
```
Convention is to use `camelCase` for variables, and the following rules:

1. variables can only be stored **once in the same scope**. It is invalid JS to declare a variable name twice. To overwrite variable value, declare the variable and change its content, or declare the variable inside another scope (more on that on following topics):
```
let myVariable = 'Something'
myVariable = 'Something Else'

// Or with 'variable shadowing'

let myVariable = 'Something'

if (false) {
  let myVariable = 'Something Else'
}
```
2. variables can **ONLY** start with a letter (a-z), a dollar sign ($) or underscore.
3. variables cannot be reserved keyworks (i.e. `let` cannot be a variable)

### Strings
Literally a string of text. Starts and ends with single quotes like so: `'This is a string'`.

### Numbers
Numbers can be full integer and don't need to be wrapped in quotes. Despite, the operation orders follow normal convention. If a specific calculation is necessary before any other, wrap it in parenthesis. For example:
```
let num = 11 + 2 * 2
```
would print out 44 instead of 26. To make it 26:
```
let num = (11 + 2) * 2
```

### Operators

**Concatenation**
For combining multiple variables, you use the concatenation operators such as `+ - * /`.
**Is equal**
Use a triple equal sign (`===`) to ask if the variable is equal to the declared value
**Is NOT equal**
Use a double equal sign preclude by an exclamation sign (`!==`) to ask if the variable is _NOT_ equal to the declared value
**Greater than/Less than**
Use the `>` or `<` sign. Follows left-to-right convention. Can also be combined with a `=` sign to make `greater-than` or `less-than`.

### Conditional Logic

#### **IF statements**
An IF statement renders the code inside a **code block** inside curly brackets after a _condition_ is presented inside simple parenthesis:
```
if (_condition_) {
// Your code
}

// More complex logic with IF and ELSE IF

if ( _condition_) {
  // Run this code if the condition is met, otherwise move on.
} else if (_anotherCondition_) {
  // Run this code if the previous condition wasn't met and stop
} else {
  // If neither condition was met, then run this code.
}
```
#### **Logical Operators**
We can use AND (`&&`) or OR (`||`) to create more complex logical statements.
- AND operator: True if _all_ sides of the logic are true. False otherwise.
- OR operator: True if _at least_ one side is true. False otherwise.

### Variable Scopes

JS uses Lexical Scope (also called Static Scope) to define the availability of variables. This is a hierarchical method of variable availability. There are 2 scopes to consider:
- Global Scope: Defined OUTSIDE all code blocks (i.e. outside a `if` statement)
- Local Scope: Defined INSIDE a code block (i.e. inside a `IF` statement)

**NB:** In a scope you can access variables defined in that scope or in any parent/ancestor (variables in parent code blocks)

Thus it is helpful to design a `scope tree` that can provide clear visualisation of the availability of variables in the scopes:

```
// Global Variable (A)
  // Local Variable (B)
    // Local Variable (C)
  // Local Variable (D)  
```

Variable C only relates to variable B and A; it does not respond to requests or changes outside of that scope

#### **Leaked Globals**

When a variable is declared in a local **without** the `let` statement ("not explicitly defined")and there are no other arguments declared, it will print as a global variable. This is referred to as `leaked global`. So as a good practice, **explicitly declare the variable** (i.e. using the `let` statement) even on local scope instead of merely declaring a new value.

## Section 4: JavaScript Functions
Functions are like subprograms: they are reusable snippets that run codes when prompted. Functions have:

1. An input (called an `argument`)
2. A code
3. An output (called a `return value`)

An interesting parallel: _It's like storing a value (code) into a variable (function)_

**Nomenclature of syntax:**
```
let myFunction = function (_argument1_, _argument2_) { // Where argument is input
  let result = ...
  return result // Output
}

myFunction(arguments) // Function called
```
We can create variables with the result of functions and get them to print:
```

let myFunction = function (value) {
  let result = value + 1
  return result
}

console.log(myFunction(value)) // Will print any value declared plus 1
```

### Undefined and Null
JS has 2 different ways for dealing with undeclared values or values that are empty: Undefined and Null.
- Undefined is **by default** set by the JS program
- Null must be **explicitly** defined by the developer

**Undefined**
Undefined is when a variable exists but _no value_ has been declared.
```
let myVariable

console.log(myVariable)

// This would print "Undefined"
```

**Null**
Null is when a variable is _cleared_ by the developer.
```
let age = 35
age = null

console.log(age) // Prints 'null'
```

### Multiple Arguments and Argument Defaults

We can set up defaults arguments for functions so if values are undefined, the default will print:
```
let myFunction = function (argument1 = 'Default Argument', argument2 = 'Another Default') { // Where argument is input
  let result = 'First argument: ' + argument 1 + ' Second Argument: ' + argument2
  return result // Output
}

console.log(myFunction()) // Would print: First argument: Default Argument Second Argument: Another Arguments

// Unless you pass the values as a string to the function:
console.log(myFunction('Something', 'Something Else'))

// You can also add 'undefined' in case the FIRST argument is not defined but you still want to call the second argument
console.log(myFunction(undefined, 'Something Else'))
```
### Template strings
Using concatenation is bad practice. For a more concise and acceptable approach, use **template strings**. Template strings allow us to dynamically inject variables into a string and change their output according to the input. The template strings syntax uses the back ticks and parenthesis for the block and a dollar sign with curly brackets for the variable:
```
let myFunction = function (argument1 = 'Default Argument', argument2 = 'Another Default') { // Where argument is input
  let result = `First argument: ${argument1}, Second argument: ${argument2}`
  return result // Output
}

console.log(myFunction()) // Would print: First argument: Default Argument Second Argument: Another Arguments
```

### Function scopes

Arguments of a function are **also** bound to the scope of the function even though they are not inside the curly brackets.

## Objects

Objects are a way to store multiple pieces of information into a single item (object). Examples: a book (has a title, number of pages, authors, etc); a user (name, password, avatar); a course (title, content, images, videos, documents)...

An object has **data** wrapped in curly brackets and looks like this:
```
let myObject = {
  title: 'A title',
  author: 'John Sasquatch',
  releaseDate: '2020-03-10'
}
console.log(myObject)
```
When running the program, it will return: `{ title: 'A title', author: 'John Sasquatch', releaseDate: '2020-03-10' }`.

To capture the individual values from an object, use **dot notation**. This is handy when using template strings as you can dynamically pass the data:

```
// Simple log

console.log(myObject.title)

// With template strings

console.log(`${title} by ${author}`)

```
### Objects in Functions
Objects can also be declared inside functions. This increases the versatility of the data as we can combine data using more complex functions and logic.
```
let gschiavon = {
  firstName: 'Gus',
  lastName: 'Schiavon',
  country: 'Brazil',
  email: 'gus@v7academy.com',
}
let gyates = {
  firstName: 'George',
  lastName: 'Yates',
  country: 'UK',
  email: 'george@v7academy.com',
}

let getUser = function(user) {
  return {
    userLocation: `${user.firstName} is from ${user.country}.`,
    userContact: `You can contact ${user.firstName} on ${user.email}`
  }
}

let gyatesUser = getUser(gyates)
let gschiavonUser = getUser(gschiavon)

console.log(gschiavonUser.userLocation)
console.log(gschiavonUser.userContact)
```

In here we are passing the object (`gschiavon`) data to the function (`getUser`) which takes the `user` variable. We are then returning (`return`) the user location and contact information using a `template string` and `dot notation`. Then, **storing the data** in a new variable (`gschiavonUser`) by **calling the function** (`getUser(gschiavon)`). **Both template strings** (`userLocation` and `userContact`) from the function are now available for output. We can then print the strings using `dot notation`.

### Object References (Lesson 30)

OK, here it starts to get a bit complicated... Referencing an object that is also passed as a function variable will result in that same object being updated. It is basically the same **object in memory**. Have a look a this example:
```
let myAccount =  {
  name: 'Gus Schiavon',
  expenses: 0,
  income: 0
}

let addExpense = function(account, amount){
  account.expenses = account.expenses + amount
  console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)
```
Passing `myAccount` as the function `object` manipulates the value of properties in the **object in memory** (in this case, `myAccount`) as well as the result of the function (`addExpense`). It does **not** work independently from the other because **both are pointing to the same object in memory**.

We can break the binding of by using an assign value to the **function argument** by using the assign operator (`=`) to the object inside the function.

### Methods
Methods are **object properties whose value is a function**. Custom methods allow us to reference object properties inside the function by using the `this` operator. `this` refers to the **object itself** and not the method:
```
let restaurant = {
  name: 'Warung Lokal',
  guestCapacity: 35,
  guestCount: 30,
  checkAvailability: function (partySize) {
    let availableSeats = this.guestCapacity - this.guestCount
    return partySize <= availableSeats
  }
  seatParty: function (partySize){
    this.guestCount = this.guestCount + partySize
  }
}

restaurant.seatParty(2)
console.log(restaurant.checkAvailability(2))
restaurant.seatParty(3)
console.log(restaurant.checkAvailability(4))
```
In the above example, using `this` to reference to the `restaurant` object we are able to pull the property values and manipulate them **inside the object itself**. This is useful as we can then call the function using `dot notation` and reference those methods for the object. In the example, the first `console.log()` should print `true`, and the second `false`.

A great database for built-in JS methods is the **MDN database**.

#### String Methods
String methods are useful for sanitizing data input by users. The list of JS methods can be found on [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). Some common useful built-in methods are:
- `trim()` method: removes trailing and preceding whitespace. Does **not** alter the original variable.
- `length()` method: prints the lenght of the variable in **character count**. Outputs a number value.
- `includes('string')` method: boolean logic method; notice it takes a property (`string`) and cross-checks with the variable. Output true or false.

```
let password = '78ejhjkrh$'

let isValidPassword = function (password) {
  if (password.includes('$') && password.length >= 4) {
    return `This is a valid password`
  } else {
    return `Invalid password`
  }
}

console.log(isValidPassword(password))
```
In here, the function will check if the variable has the `$` symbol by using the `includes('$')` method and passing the string as argument, and also check if the password length is valid using the `length` method. If both conditions are met, it will print the `This is a valid password` string; else, it will return `Invalid Password`.

_Tip:_ You can also remove the `if/else` statement if only wanting the boolean result (`true/false`) by simply calling `return` before the conditional logic (remove `if` and `else`).

#### Number Methods
Number methods _per sé_ are not very useful, apart from `toFixed(num)`, which will limit the number of decimals in a number. Most common are the `Math` methods, which allow for more useful application. `Math` requires it to be called before the method definition. Some of the most used are.
- `Math.round(num)`: rounds the number to the closest value (up or down)
- `Math.floor(num)`: rounds number to the lowest integral value
- `Math.ceil(num)`: rounds number up to the highest integral value

### Constant variables
Constant variables (`const`) are similar to normal variables (`let`), although its value **cannot** be changed (hence _constant_). They are commonly used for variables that don't change throughout the program. Despite, the `properties` of constant variables `objects` can be manipulated using dot notation. The use is mostly to semantics: it helps describe what the variable will do: if it changes through the program or if it's constant throughout.

### Using `var` for variables
`var` is an older syntax for variable declaration. It is still used and has its own quirks that make `let` and `const` the preferred methods to declare variables:
- `var` allows you to **re-declare** the variable on the program. This can be easy to spot in small applications but in larger programs it can become an issue. JavaScript **will not notify** it as an error if a variable is declared twice, instead using the _last instance_ as the value for the variable.
- `var` has a **function-based scope**, meaning it makes the variabled available in previous branches even though it is in a deeper scope.

## Arrays
Arrays are lists containing data. They are a way of **organizing data** and useful for listings. Arrays can contain different types of data (`string` or `boolean` or `integer`) although they are normally a combination of similar data types:
```
const myArray = ['Array item 1', 'Another Array Item', 5, true, 'Another array item']
```
Arrays can be used inside template variables by using an identifier (`Currently selected: ${myArray[0]}`) to get the specific item in the array. Worth noting that arrays start at `0`, so the previous code would return `Currently selected: Array item 1`. We can also make more complex logic:
```
console.log(`Second-to-last item: ${myArray[myArray.length - 2]}`)
```
This would print `true` as it is the second-to-last item in the array, determined by the basic calculation in the template variable.

### Array Methods
We can also make changes to arrays (like adding or removing array items) using methods. Some common methods:
- `myArray.push('New array item')`: the `push` method **adds** the new item to the **end** of the array.
- `myArray.pop()`: the `pop` method **removes** the **last** item of the array (basically the opposite of `push`).
- `myArray.unshift('New array item')`: the `unshift` method adds the new item to the **beginning** of the array.
- `myArray.shift()`: the `shift` method **removes** the **first** item of the array.
- `myArray.splice(starting_point, quantity, new_item)`: the `splice` method allows us to pick a starting point in the array _(i.e. the array item position)_, choose how many items to manipulate (i.e. remove) and also pass new values to the array position. For example:
```
myArray.splice(1, 3)

console.log(myArray)

// Will remove 3 items starting from position 1 in the array, resulting in {'Array item 1', 'Another array item'}

// OR

myArray.splice(2, 0, 'New item')

console.log(myArray)

// Will insert a new array item ('New item') in the second position of the array without removing any other array items.
```
### Looping over arrays
We can use a specific method for looping over arrays. A common method for looping over arrays is called `forEach()`, it is a *function*, and it takes a single argument to it: another `function()`. This is referred to as a **Callback Function**. Common ways of doing this:
```
// Define a variable that is a function and pass it as an argument to the forEach method:

const doThis = function(arguments) {
  ...
}

myArray.forEach(doThis)

// OR

// Pass the function in-line in the forEach method:

myArray.forEach(function(arguments){

  })
```
### For Loops
Using the reserved word `for` we can run the loop with specific configuration inside the parenthesis. The configuration required takes all of the following, **separated by a semi-colon (`;`):**
- an `initializer`: the initializer is only run **once** and is the starting point for the `for` loop. **It can also be a declared variable** which is scoped to the `for` loop only.
- a `condition`: a logic to follow in order to provide an end to the loop, otherwise it runs infinitely. **This is an important point to consider**.
- an `expression`: runs after the `condition` is met, or doesn't run if not met. Examples could be **increase the count** or **remove an item**.
For an overview:
```
for (initializer; condition; expression) {
  console.log(...)
}
```
