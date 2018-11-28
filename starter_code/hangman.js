var hangman;

function Hangman() {
  this.words = ['awkward', 'bagpipes', 'crypt', 'dwarves', 'jazz' ];
  // this.words = [];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  // let length = this.words.length;
  //get random index
  let i = Math.floor(Math.random() * this.words.length)
  this.secretWord = this.words[i]
  console.log(this.words)
  //getWord should return a string
  return this.secretWord;
  console.log(this.secretWord);
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  // let key = keyCode.toLowerCase();
  while(keyCode.length === 1)
  if (keyCode.match(/[a-z]/i)) {
		return true;
	} else {
		return false;
  }

};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) !== -1) {
        return false;
      } else {
        return true;
      }
};

Hangman.prototype.addCorrectLetter = function (i) {
  //addCorrectLetter should add letters to guessedLetter string
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  //addWrongLetter should discount the amount of errors left
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  //checkGameOver should return false if the errorsLeft is 0
   if (this.errorsLeft <= 0) {
        return true;
      } else {
        return false;
      }
};

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};


