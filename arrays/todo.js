const toDos = ['Organize schedule', 'Finalize portfolio', 'Film intro video', 'Fix board ding', 'Email someone']

toDos.splice(2, 1)
toDos.push('A new task')
toDos.shift()

console.log(`You have ${toDos.length} items in your to-do list`)


toDos.forEach(function(item, index){
  console.log(`${index + 1}. ${item}`)
})

for ( let count = 0; count < toDos.length; count++ ) {
  const index = count + 1
  const item = toDos[count]
  console.log(`${index}. ${item}`)
}
