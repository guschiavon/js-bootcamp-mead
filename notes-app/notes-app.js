const notes = [{
  title: 'Note 1',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  archive: true
}, {
  title: 'Note 2',
  body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  archive: false
}, {
  title: 'Note 3',
  body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  archive: false
}, {
  title: 'Note 4',
  body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  archive: true
}]

const filters = {
  searchText: ''
}



document.querySelector('#newNote-form').addEventListener('submit', function (e) {
  e.preventDefault() // Prevents browser default behaviour; we set it manually.
  notes.push({
    title: e.target.elements.title.value,
    body: e.target.elements.body.value,
    archive: false
  }) // Creates the new object in the array
  e.target.elements.title.value = '' // Clears form input fields
  e.target.elements.body.value = '' // Clears form input fields
  renderNotes(notes, filters) // We always need to re-render the array with the new items otherwise it will not display
})

document.querySelector('#search-box').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '' // empties the container element after each input keystroke

  filteredNotes.forEach(function (note) {
    const newNote = document.createElement('li')
    newNote.textContent = note.title
    document.querySelector('#notes').appendChild(newNote)
  }) // This function is rendering each filtered note that matches the filter according to the title and then creating an element inside the `#notes` container
}

renderNotes(notes, filters)