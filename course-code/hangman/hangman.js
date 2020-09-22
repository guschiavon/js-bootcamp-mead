class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetter = []
    this.status = 'Playing'
  }
  gameStatus() {
    const finished = this.word.every((letter) =>
      this.guessedLetter.includes(letter)
    );

    if (this.remainingGuesses === 0) {
      this.status = "Failed";
    } else if (finished) {
      this.status = "Success";
    } else {
      this.status = "Playing";
    }
  }
  getStatusMessage() {
     if (this.status === "Playing") {
       return `Guesses left: ${this.remainingGuesses}`;
     } else if (this.status === "Failed") {
       return `Nice try... the word was "${this.word.join("")}"`;
     } else {
       return "Good job, you guessed the word!";
     }
  }
  getPuzzle() {
    let puzzle = "";

    // The for loop here iterates over the array created by the split method (in this canse, split the word into letters

    this.word.forEach((letter) => {
      if (this.guessedLetter.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)

  if (this.status !== 'Playing') {
    return
  }

  if (isUnique) {
    this.guessedLetter.push(guess)
  } 

  if (isUnique && isBadGuess) {
    this.remainingGuesses-- // The "--" is a shorthand syntax that reduces the remaining guesses by one (same as '= this.remainingGuesses - 1); for adding, you can use '++'
  }
  this.gameStatus()
  }
}

const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Cachorro', 3)

