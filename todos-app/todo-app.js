const toDos = [{
  title: 'Organize schedule',
  complete: true
}, {
  title: 'Finalize portfolio',
  complete: false
}, {
  title: 'Film intro video',
  complete: true
}, {
  title: 'Fix board ding',
  complete: false
}, {
  title: 'Email someone',
  complete: false
}]

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderToDos = function (toDos, filters) {
    let filteredToDos = toDos.filter(function (toDo) {
        return toDo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    }) // the `let` declaration lets us change the variable below:

    filteredToDos = filteredToDos.filter(function (toDo){
      if (filters.hideCompleted) {
        return !toDo.complete
      } else {
        return true
      }
      // return !filters.hideCompleted || !toDo.complete // Optional solution
    })

    const incompleteToDos = filteredToDos.filter(function (toDo) {
        return !toDo.complete
    })
    
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteToDos.length} things left to-do.`
    document.querySelector(`#todos`).appendChild(summary)
    
    filteredToDos.forEach(function (toDo) {
      const newEl = document.createElement('li')
      newEl.textContent = toDo.title
      document.querySelector('#todos').appendChild(newEl)
    })
}

renderToDos(toDos, filters)

document.querySelector('#search-query').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderToDos(toDos, filters)
})

document.querySelector('#newToDo').addEventListener('submit', function (e) {
  e.preventDefault() // This prevents the browsers default action
  toDos.push({
    title: e.target.elements.title.value,
    complete: false
  }) // creating an object and including it into the array
  renderToDos(toDos, filters)
  e.target.elements.title.value = '' // Clears the form upon submit event
})

document.querySelector('#completed').addEventListener('change', function(e) {
      filters.hideCompleted = e.target.checked
      renderToDos(toDos, filters)
})
 