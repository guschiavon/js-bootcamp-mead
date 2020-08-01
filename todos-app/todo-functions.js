
// Parse localStorage data and populate the array

const getLocalStorage = function () {
    const toDosJSON = localStorage.getItem('toDos')
    if (toDosJSON !== null) {
        return JSON.parse(toDosJSON)
    } else {
        return []
    }
}

// render toDos

const renderToDos = function (toDos, filters) {
    const filteredToDos = toDos.filter(function (toDo) {
        const searchTextMatch = toDo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.complete

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteToDos = filteredToDos.filter(function (toDo) {
        return !toDo.complete
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector(`#todos`).appendChild(generateSummary(incompleteToDos))
    filteredToDos.forEach(function (toDo) {
        document.querySelector('#todos').appendChild(addNewDOMElement(toDo))
    })
}

// Create and add new DOM element

const addNewDOMElement = function (toDo) {
    const newEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    textEl.textContent = toDo.title
    button.textContent = 'X'
    newEl.appendChild(button)
    newEl.appendChild(textEl)

    return newEl
}

// Save the ToDos to localStorage
const saveToDos = function (toDos) {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

// Generate a summary of how many to dos are left
const generateSummary = function (incompleteToDos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteToDos.length} things left to-do.`
    return summary
}