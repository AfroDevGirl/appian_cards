const Card = require('./card')

describe('Card', () => {
  const suit = 'Clubs'
  const value = '7'

  test('it initializes with a suit and value', () => {
    const card = new Card(suit, value)

    expect(card.suit).toEqual(suit)
    expect(card.value).toEqual(value)
  })

  test('print() returns a string of the card value', () => {
    const card = new Card(suit, value)
    const expected = "7 of Clubs"

    const actual = card.print()

    expect(actual).toEqual(expected)
  })
})
