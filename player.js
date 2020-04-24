class Player {
  hand = [];
  name;
  #cardLimit = 0;

  constructor(cardLimit, hand, name) {
    this.#cardLimit = cardLimit;
    this.hand = hand;
    this.name = name;
  }

  addCard(card) {
    if(this.hand.length === this.#cardLimit) {
      this.discardOne()
    }

    this.hand.push(card)
  }

  discardOne() {
    return this.hand.pop()
  }

  playCard() {
    return this.hand.shift()
  }
}

module.exports = Player
