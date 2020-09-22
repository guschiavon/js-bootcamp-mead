const people = [{
    name: 'Gus',
    age: 37
}, {
    name: 'Sophie',
    age: 22
}, {
    name: "Rich",
    age: 30
}]

const person = people.find((person) => person.age === 37)
console.log(person.name)