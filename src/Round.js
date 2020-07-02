const Turn = require("./Turn");

class Round {
  constructor(cards) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = cards;
    this.currentCard = cards[0];
    this.finalPercent;
  }
  returnCurrentCard() {
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
    this.finalPercent = finalPercent;
    return finalPercent.toFixed();
  }
  endRound() {
    if (this.currentCard === undefined) {
      console.log(
        `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
      );

      return process.exit();
    }

    // if (this.currentCard === undefined && this.turns < 30) {
    //   console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);

    //   return process.exit();
    // } else {
    //   console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);

    //   let secondGame = new Game();

    //   secondGame.currentRound++;
    //   secondGame.start();
    // }
  }
}

module.exports = Round;