const Card = require('./card')

class Deck {
  cards = [];
  dealtCards = [];

  constructor() {
    this.cards = this.initializeCards();
  }

  initializeCards() {
    const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
    const values = Array.from(Array(13).keys()).map(function (num) {
      const realVal = num + 1;
      switch (realVal) {
        case 1:
          return "Ace";
        case 11:
          return "Jack";
        case 12:
          return "Queen";
        case 13:
          return "King";
        default:
          return realVal.toString();
      }
    });

    return suits
      .map(function (suit) {
        return values.map(function (value) {
          return new Card(suit, value);
        });
      })
      .flat();
  }

  shuffle() {
    const newCards = [].concat(this.cards);

    newCards.forEach(function (card, index) {
      const randIndex = Math.floor(Math.random() * Math.floor(52));

      let tmp = newCards[randIndex];
      newCards[randIndex] = card;
      newCards[index] = tmp;
    });

    this.cards = newCards;
  }

  dealOneCard() {
    if (!this.cards.length) {
      return "You've reached the end of the deck";
    }

    const dealtCard = this.cards.shift();
    this.dealtCards.push(dealtCard);

    return dealtCard;
  }
}

module.exports = Deck
