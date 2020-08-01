let notes = []

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null ) {
  notes = JSON.parse(notesJSON)
}



document.querySelector('#search-box').addEventListener('input', function (e) {
  filterNotes(notes, filters)
})

document.querySelector('#newNote-form').addEventListener('submit', function (e) {
  createNote(notes)
  }) // Creates the new object in the array

  localStorage.setItem('notes', JSON.stringify(notes))

  e.target.elements.title.value = '' // Clears form input fields
  e.target.elements.body.value = '' // Clears form input fields
  renderNotes(notes, filters) // We always need to re-render the array with the new items otherwise it will not display
  // console.log(notesJSON)
})