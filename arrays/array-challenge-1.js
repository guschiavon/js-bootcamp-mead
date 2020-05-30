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


// This function finds the array object by its title and deletes it.
const deleteToDo = function (toDos, toDoTitle) {
  const index = toDos.findIndex(function (toDo) {
    return toDo.title.toLowerCase() === toDoTitle.toLowerCase()
  })
  if (index > -1) {
    toDos.splice(index, 1)
  }
}

deleteToDo(toDos, 'Film intro video')

console.log(toDos)
