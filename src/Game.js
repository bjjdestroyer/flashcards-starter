const data = require('./data');
const prototypeQuestions = data.prototypeData;
const objectQuestions = data.objectData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = 0;
  }
  start() {
    this.currentRound++;
    let cardDeck = [];
    
    if (this.currentRound === 1) {
        prototypeQuestions.forEach((cardData) => {
          let card = new Card(
            cardData["id"],
            cardData["question"],
            cardData["answers"],
            cardData["correctAnswer"]
          );
          cardDeck.push(card);
        });
      } else {
        objectQuestions.forEach((cardData) => {
          let card = new Card(
            cardData["id"],
            cardData["question"],
            cardData["answers"],
            cardData["correctAnswer"]
          );
          cardDeck.push(card);
        });
      }
      let deck = new Deck(cardDeck);
      let round = new Round(deck.cards);

      this.printMessage(deck, round);
      this.printQuestion(round);
    }
  
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;