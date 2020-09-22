console.log(uuidv4())

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = ""; // empties the container element after each input keystroke

  filteredNotes.forEach(function (note) {
    const newNote = document.createElement("li");
    newNote.textContent = notes.title;
    document.querySelector("#notes").appendChild(newNote);
  }); // This function is rendering each filtered note that matches the filter according to the title and then creating an element inside the `#notes` container
};

// Filter notes

const filterNotes = (notes, filters) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
    return filterNotes
}

// Create notes
 const createNote = function (e, notes) {
     e.preventDefault() // Prevents browser default behaviour; we set it manually.
  notes.push({
    title: e.target.elements.title.value,
    body: e.target.elements.body.value,
    archive: false  
 })
 return createNote
}