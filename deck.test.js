const Deck = require('./deck')

describe('Deck', () => {
  test('it initializes all of the cards', () => {
    const deck = new Deck()

    expect(deck.cards).toHaveLength(52)
  })

  describe('initializeCards()', () => {
    const deck = new Deck()

    test('it generates 52 cards', () => {
      expect(deck.initializeCards()).toHaveLength(52)
    })

    test('it has 13 cards in each suit', () => {
      const filterBySuit = (suit, cards) => {
        return cards.filter((card) => card.suit === suit)
      }
      const cards = deck.initializeCards()
      const suits = ["Clubs", "Spades", "Hearts", "Diamonds"]
      suits.forEach((suit) => {
        const filteredCards = filterBySuit(suit, cards)

        expect(filteredCards).toHaveLength(13)
      })
    })
  })

  describe('shuffle()', () => {
    const deck = new Deck()
    
    test('it randomizes the cards on every call', () => {
      const initialCards = deck.cards
      deck.shuffle()
      const shuffledCards = deck.cards

      expect(initialCards).not.toEqual(shuffledCards)
    })
  })

  describe('dealOneCard()', () => {
    const deck = new Deck()

    test('it removes a card from the deck and returns it', () => {
      deck.shuffle()
      const firstCard = deck.cards[0]
      const dealtCard = deck.dealOneCard()

      expect(dealtCard).toEqual(firstCard)
      expect(dealtCard).toEqual(deck.dealtCards[0])
    })

    test('it does not return a card if the deck is empty', () => {
      deck.cards = []

      const actual = deck.dealOneCard()

      expect(actual).toEqual("You've reached the end of the deck")
    })
  })
})
