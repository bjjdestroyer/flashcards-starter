class Deck {
  constructor(cards) {
    this.cards = cards;
    this.numberOfCards = 0;
  }
  countCards() {
    this.cards.forEach( () => this.numberOfCards++);
    return this.numberOfCards;
  }
}

module.exports = Deck;