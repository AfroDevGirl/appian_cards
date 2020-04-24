const Deck = require("./deck");
const Player = require("./player");

class Game {
  cardLimit = 0;
  deck;
  player1;
  player2;

  constructor(cardLimit) {
    this.cardLimit = cardLimit;
    this.deck = new Deck();
  }

  dealHand() {
    const newHand = [];
    for (let i = 0; i < this.cardLimit; i++) {
      newHand.push(this.deck.dealOneCard());
    }
    return newHand;
  }

  getNumericValue(strVal) {
    const faceValueMap = {
      Ace: 1,
      Jack: 11,
      Queen: 12,
      King: 13,
    };

    if(faceValueMap[strVal]) {
      return faceValueMap[strVal]
    } else {
      return 0
    }
  }

  determineWinner(cardOneValue, cardTwoValue) {
    let numericOne = parseInt(cardOneValue);
    let numericTwo = parseInt(cardTwoValue);

    if (isNaN(numericOne) && isNaN(numericTwo)) {
      numericOne = this.getNumericValue(cardOneValue);
      numericTwo = this.getNumericValue(cardTwoValue);
    } else if (isNaN(numericOne)) {
      numericOne = this.getNumericValue(cardOneValue);
    } else if (isNaN(numericTwo)) {
      numericTwo = this.getNumericValue(cardTwoValue);
    }

    if (numericOne > numericTwo) {
      return cardOneValue;
    } else if (numericTwo > numericOne) {
      return cardTwoValue;
    } else {
      return null;
    }
  }

  round() {
    const firstCard = this.player1.playCard();
    const secondCard = this.player2.playCard();
    console.log(`${this.player1.name} has a ${firstCard.print()}`);
    console.log(`${this.player2.name} has a ${secondCard.print()}`);

    const winningValue = this.determineWinner(
      firstCard.value,
      secondCard.value
    );
    let winnerText;
    if (!winningValue) {
      this.player1.addCard(this.deck.dealOneCard());
      this.player2.addCard(this.deck.dealOneCard());
      winnerText = "Draw!";
    } else if (firstCard.value === winningValue) {
      this.player2.addCard(this.deck.dealOneCard());
      winnerText = `${this.player1.name} Wins!`;
    } else if (secondCard.value === winningValue) {
      this.player1.addCard(this.deck.dealOneCard());
      winnerText = `${this.player2.name} Wins!`;
    }

    return `
      ${winnerText} \n
      ${this.player1.name} has ${this.player1.hand.length} cards, ${this.player2.name} has ${this.player2.hand.length} \n
    `;
  }

  run() {
    this.deck.shuffle();
    this.player1 = new Player(this.cardLimit, this.dealHand(), "Player One");
    this.player2 = new Player(this.cardLimit, this.dealHand(), "Player Two");
    let roundCount = 1;

    do {
      console.log(`Welcome to Round ${roundCount} \n`);
      console.log(this.round());
      roundCount++;
    } while (this.player1.hand.length && this.player2.hand.length);
  }
}

module.exports = Game;
