const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Card', function () {

  it('should be a function', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Card', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card being played', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    const turn = new Turn('object', card1);
    expect(round.returnCurrentCard(turn)).to.equal(card1);
  });

  it('should start a new turn when a guess is made', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(round.turns).to.equal(0);
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should update turns count when takeTurn() is called', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(round.turns).to.equal(0);
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    expect(round.turns).to.equal(3);
  });
    
  it('should make the next card the current card', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.currentCard).to.equal(card2);
  });

  it('should return a message if the answer is correct', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(card1.correctAnswer).to.equal('object');
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should return a message if the answer is incorrect', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(card1.correctAnswer).to.equal('object');
    expect(round.takeTurn('arra')).to.equal('incorrect!');
  });

  it('should store incorrect guesses in an array', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(card1.correctAnswer).to.equal('object');
    expect(round.takeTurn('array')).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([1]); 
  });

  it('should return a message if the answer is incorrect', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);
    expect(card1.correctAnswer).to.equal('object');
    expect(round.takeTurn('array')).to.equal('incorrect!');
  });

  it('should calculate and return the percentage of correct guesses', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);

    expect(card1.correctAnswer).to.equal('object');
    expect(round.takeTurn('array')).to.equal('incorrect!');
    expect(round.takeTurn('function')).to.equal('incorrect!');
    expect(round.takeTurn('bobo')).to.equal('incorrect!');
    expect(round.takeTurn('object')).to.equal('correct!');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(25);
  });

  it('should end the round when all questions have been answered', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?s?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    const cards = [card1, card2, card3];
    const round = new Round(cards);

    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('mutator method');

    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});