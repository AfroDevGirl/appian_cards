const Deck = require('./deck')
const Player = require('./player')

class Main {
  cardLimit = 0
  deck;
  player1;
  player2;

  constructor(cardLimit) {
    this.cardLimit = cardLimit
    this.deck = new Deck()
  }
  
  dealHand() {
    const newHand = []
    for(let i = 0; i < this.cardLimit; i++) {
      newHand.push(this.deck.dealOneCard())
    }
    return newHand
  }
  
  getNumericValue(strVal) {
    switch(strVal) {
      case 'Ace':
        return 1
      case 'Jack':
        return 11
      case 'Queen':
        return 12
      case 'King':
        return 13
    }
  }

  determineWinner(cardOneValue, cardTwoValue) {
    let numericOne = parseInt(cardOneValue)
    let numericTwo = parseInt(cardTwoValue) 

    if (isNaN(numericOne) && isNaN(numericTwo)) {
      numericOne = this.getNumericValue(cardOneValue);
      numericTwo = this.getNumericValue(cardTwoValue);
    } else if (isNaN(numericOne)) {
      numericOne = this.getNumericValue(cardOneValue)
    } else if (isNaN(numericTwo)) {
      numericTwo = this.getNumericValue(cardTwoValue)
    }

    if (numericOne > numericTwo) {
      return cardOneValue
    } else if (numericTwo > numericOne) {
      return cardTwoValue
    } else {
      return null
    }
  }

  round(player1, player2) {
    const firstCard = player1.playCard()
    const secondCard = player2.playCard()
    console.log(`${player1.name} has a ${firstCard.print()}`)
    console.log(`${player2.name} has a ${secondCard.print()}`);

    const winningValue = this.determineWinner(firstCard.value, secondCard.value)
    let winnerText;
    if (!winningValue) {
      player1.addCard(this.deck.dealOneCard());
      player2.addCard(this.deck.dealOneCard());
      winnerText = 'Draw!'   
    } else if (firstCard.value === winningValue) {
      player2.addCard(this.deck.dealOneCard())
      winnerText = `${player1.name} Wins!`
    } else if (secondCard.value === winningValue) {
      player1.addCard(this.deck.dealOneCard());
      winnerText = `${player2.name} Wins!`
    }

    return `
      ${winnerText} \n
      ${player1.name} has ${player1.hand.length} cards, ${player2.name} has ${player2.hand.length} \n
    `; 
  }

  run() {
    this.deck.shuffle()
    const player1 = new Player(this.cardLimit, this.dealHand(), 'Player One')
    const player2 = new Player(this.cardLimit, this.dealHand(), 'Player Two')
    let roundCount = 1

    do {
      console.log(`Welcome to Round ${roundCount} \n`)
      console.log(this.round(player1, player2))
      roundCount++
    } while(player1.hand.length && player2.hand.length)
  }
}

const game = new Main(5)
game.run()
