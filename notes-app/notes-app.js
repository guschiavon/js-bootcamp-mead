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

document.querySelector('#search-box').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.body.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const newNote = document.createElement('li')
    newNote.textContent = note.body
    document.querySelector('#notes').appendChild(newNote)
  })
}

renderNotes(notes, filters)
