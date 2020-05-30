const myArray = [
  {
  title: 'My first item',
  body: 'This is the content of the first item'
}, {
  title: 'Another item',
  body: 'Another body content for this item'
}, {
  title: 'Something completely random',
  body: 'Some more content here'
}]

// Comment either function otherwise there is a conflict.

// const findItem = function (myArray, itemTitle) {
//   const item = myArray.find(function (arrayItem) {
//     return arrayItem.title.toLowerCase() === itemTitle.toLowerCase()
//   })
//   return item
// }

const findItem = function (myArray, itemTitle) {
  const index = myArray.findIndex(function (arrayItem) {
    return arrayItem.title.toLowerCase() === itemTitle.toLowerCase()
  })
  return index
  // alternatively, return myArray[index] outputs the array item
}


const arrayItem = findItem(myArray, 'my first item')
console.log(arrayItem)

// We pass the `console.log` with the `findItem()` function, which will look into the `myArray` array for an item with the title `'My first item'`. The title is a **function argument.** Inside the `findItem()` function, we will pass `findIndex()` to find the item index in the `myArray` that matches the `itemTitle` from the `findItem()` function. The program will run and return the `index` of the `arrayItem` which matches the `itemTitle` specified on the `findIndex` function. If there is a match it will be stored in the `index` variable. This is case-sensitive, but by using the `toLowerCase()` method we can render both strings as lower case before the match is evaluated.
