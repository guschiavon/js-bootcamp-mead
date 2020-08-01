const toDos = getLocalStorage()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderToDos(toDos, filters)

document.querySelector('#search-query').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderToDos(toDos, filters)
})

document.querySelector('#newToDo').addEventListener('submit', function (e) {
  e.preventDefault() // This prevents the browsers default action
  toDos.push({
    id: uuidv4(), 
    title: e.target.elements.title.value,
    complete: false
  }) // creating an object and including it into the array
  saveToDos(toDos)
  renderToDos(toDos, filters)
  e.target.elements.title.value = '' // Clears the form upon submit event
})

document.querySelector('#completed').addEventListener('change', function(e) {
      filters.hideCompleted = e.target.checked
      renderToDos(toDos, filters)
})
 