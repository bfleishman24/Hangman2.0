var Letter = require('./Letter.js');

function Word(randWord){
    this.arrayWord = randWord.split("");
    this.spots = [];
	this.underScore = function () {
		for (i = 0; i < this.arrayWord.length; i++) {
			this.spots.push(new Letter(this.arrayWord[i]).inputLetter);
		}
    };
    this.letterGuess = function(letterGuess) {
        for (i = 0; i < this.arrayWord.length; i++) {
            if (this.arrayWord[i].letter === letterGuess) {
                this.arrayWord[i].guessed = true;
            };
        };
    };
    this.showBlanks = function(currentWord) {
        let string = '';
        for (i = 0; i < this.currentWord.length; i++) {
            string += this.currentWord[i].letterGuessed();
        };
        console.log(string);
    };
}


module.exports = Word;