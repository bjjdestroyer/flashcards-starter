class Deck {
    constructor(cards) {
        this.cards = cards;
        this.numberOfCards = 0;
    }
    countCards() {
        this.cards.forEach(card => this.numberOfCards++);
    }
}

// prototypeData.forEach(creatingCard => {
//     let card = new Card(creatingCard.id, triviaCard.question...)
//     push card pileOfCards
// })

// let pileOfCards = []

// const deck = new Deck(pileOfCards)

module.exports = Deck;