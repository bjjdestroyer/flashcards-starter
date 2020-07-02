class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess,
    this.currentCard = currentCard,
    this.guessCorrect = null;
  }
  returnGuess() {
    return this.userGuess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      return this.guessCorrect = true;
    } else {
      return this.guessCorrect = false;
    }
  }
  giveFeedback() {
    switch(this.guessCorrect) {
    case true:
			return "correct!"
			break;
		case false:  
			return "incorrect!";
			break;
    }
  }
}

module.exports = Turn;