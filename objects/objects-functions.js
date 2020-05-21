let gschiavon = {
  firstName: 'Gus',
  lastName: 'Schiavon',
  country: 'Brazil',
  email: 'gus@v7academy.com',
}
let gyates = {
  firstName: 'George',
  lastName: 'Yates',
  country: 'UK',
  email: 'george@v7academy.com',
}

let getUser = function(user) {
  return {
    userLocation: `${user.firstName} is from ${user.country}.`,
    userContact: `You can contact ${user.firstName} on ${user.email}`
  }
}

let gyatesUser = getUser(gyates)
let gschiavonUser = getUser(gschiavon)

console.log(gschiavonUser.userLocation)
console.log(gschiavonUser.userContact)

// Example 2: In this case it's not an object in the function: it's a string!

let convertFahrenheit = function (fahrenheit) {
  let kelvin = (fahrenheit + 459.67) * 5 / 9
  let celsius = (fahrenheit - 32) * 5 / 9
  return {
    tempConvert: `${fahrenheit} degrees Fahrenheit is equivalent to ${celsius} degrees Celsius and ${kelvin} Kelvin`
  }
}

// Example 2 Alternative: with more Function Objects
let convertFahrenheit = function (fahrenheit) {
  return {
    tempFahrenheit: fahrenheit,
    tempCelsius: (fahrenheit - 32) * (5 / 9),
    tempKelvin: (fahrenheit - 459.67) * (5 / 9)
  }
}

let tempConverter = convertFahrenheit(85)

console.log(tempConverter.tempConvert)
