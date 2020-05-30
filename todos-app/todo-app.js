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
  complete: true
}]

const filters = {
  searchText: ''
}

document.querySelector('#search-query').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderToDos(toDos, filters)
})

const renderToDos = function (toDos, filters) {
  const filteredToDos = toDos.filter(function (toDo) {
    return toDo.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#todos').innerHTML = ''

  filteredToDos.forEach(function (toDo){
    const newEl = document.createElement('li')
    newEl.textContent = toDo.title
    document.querySelector('#todos').appendChild(newEl)
  })
}

renderToDos(toDos, filters)




// document.querySelector('#todos').innerHTML = '' // Empties the div from previous items

// filteredToDos.forEach(function (toDo) {
//   const newElement = document.createElement('li')
//   newElement.textContent = toDo.title
// })
// }



 