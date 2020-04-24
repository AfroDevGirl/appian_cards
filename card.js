class Card {
  suit = "";
  value = "";

  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  print() {
    return `${this.value} of ${this.suit}`;
  }
}

module.exports = Card
