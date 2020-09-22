// Prototypal Inheritance

class User {
  constructor(firstName, lastName, age, likes =[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    // The use of an arrow function here is warranted as it doesn't bind the 'this' object (it is bound by the parent function 'getBio()').
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  setName() {
    // Here we are using the split method to retrieve the first and last names. The split method creates a string (in this case, fullName), and remove the first instance of the argument passed.
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const user1 = new User('Gus','Schiavon', 37, ['canyoning','photography'])

console.log(user1.getBio())