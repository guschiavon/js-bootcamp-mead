let fahrenheit = 50
let kelvin = (fahrenheit + 459.67) * 5 / 9

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}

console.log(convertFahrenheitToCelsius(32))
