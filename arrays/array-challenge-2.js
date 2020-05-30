const toDos = [{
  title: 'Organize schedule',
  status: 'completed'
}, {
  title: 'Finalize portfolio',
  status: 'incomplete'
}, {
  title: 'Film intro video',
  status: 'incomplete'
}, {
  title: 'Fix board ding',
  status: 'incomplete'
}, {
  title: 'Email someone',
  status: 'completed'
}]


const findItem = function (array, query) {
  return filteredItems = array.filter(function (item) {
    return itemStatus = item.status.toLowerCase().includes(query)
  })
}

console.log(findItem(toDos, 'incomplete'))

const getIncompleteItem = function (array) {
  return array.filter(function (item) {
    return item.status === 'incomplete'
  })
}



console.log(getIncompleteItem(toDos))
