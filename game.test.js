const Game = require('./game')
const Deck = require('./deck')
const Card = require('./card')

describe('Game', () => {
  const cardLimit = 5

  test('it initializes with a cardLimit and deck', () => {
    const game = new Game(cardLimit)

    expect(game.cardLimit).toEqual(cardLimit)
    expect(game.deck).toBeInstanceOf(Deck)
  })

  describe('dealHand()', () => {
    test('it creates a new hand from the deck', () => {
      const game = new Game(cardLimit)
  
      const actual = game.dealHand()

      expect(actual).toHaveLength(cardLimit)
      expect(actual[0]).toBeInstanceOf(Card)
    })
  })

  describe('getNumericValue', () => {
    test('it returns the numeric value of a face card', () => {
      const faceValueMap = {
        Ace: 1,
        Jack: 11,
        Queen: 12,
        King: 13,
      };
      const game = new Game(5)

      Object.keys(faceValueMap).forEach((face) => {
        const actual = game.getNumericValue(face)

        expect(actual).toEqual(faceValueMap[face])
      })
    })
  })

  describe('determineWinner()', () => {
    test('it returns a null with the card values are the same', () => {
      const value1 = '9'
      const value2 = '9'
      const game = new Game(5)

      const actual = game.determineWinner(value1, value2)

      expect(actual).toBeNull()
    })

    test('it returns the first value when it is greater than the second value', () => {
      const value1 = 'King'
      const value2 = '4'
      const game = new Game(5);

      const actual = game.determineWinner(value1, value2);

      expect(actual).toEqual(value1);
    })

    test("it returns the second value when it is greater than the first value", () => {
      const value1 = "8";
      const value2 = "10";
      const game = new Game(5);

      const actual = game.determineWinner(value1, value2);

      expect(actual).toEqual(value2);
    });
  })
})
