const Turn = require("./Turn");

class Round {
  constructor(cards) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = cards;
    this.currentCard = cards[0];
  }
  returnCurrentCard(currentTurn) {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    var turn = new Turn(userGuess, this.currentCard);

    var guessEval = turn.evaluateGuess();

    switch (guessEval) {
    case false:
      this.turns++;
      this.incorrectGuesses.push(this.currentCard.id);        
      return turn.giveFeedback();
      break;
    case true:
      this.turns = this.turns + 1;
      this.currentCard = this.deck[this.currentCard.id];
      return turn.giveFeedback();
      break;
    }
  }
  calculatePercentCorrect() {
    const finalPercent = 100 - ((this.incorrectGuesses.length / this.turns) * 100);
    return finalPercent.toFixed();
  }
  endRound() {
    if (this.currentCard === undefined) {
       console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      return process.exit();
    }
  }
}

module.exports = Round;