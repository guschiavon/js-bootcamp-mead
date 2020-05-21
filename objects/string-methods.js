let password = '78$'

let isValidPassword = function (password) {
  if (password.includes('$') && password.length >= 4) {
    return `This is a valid password`
  } else {
    return `Invalid password`
  }
}

console.log(isValidPassword(password))
