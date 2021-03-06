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

const findArchivedItem = function (array) {
  return array.filter(function (arrayItem) {
    return arrayItem.archive
  })
}

const sortItems = function (array) {
  array.sort(function (a) {
    if (!a.archive) {
      return -1
    } else {
      return 1
    }
  })
}

console.log(findArchivedItem(notes))
console.log('****************************')
sortItems(notes)
console.log(notes)
