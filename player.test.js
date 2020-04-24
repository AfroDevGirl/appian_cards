const Player = require('./player')

describe('Player', () => {
  const cardLimit = 5
  const hand = ['one', 'two', 'three', 'four']
  const name = 'Player One'

  test('it initializes with the passed values', () => {
    const player = new Player(cardLimit, hand, name)

    expect(player.hand).toEqual(hand)
    expect(player.name).toEqual(name)
  })

  describe('addCard()', () => {
    test('it adds a new card to the hand', () => {
      const player = new Player(cardLimit, hand, name)
      expect(player.hand).not.toContain('five')
  
      player.addCard('five')
  
      expect(player.hand).toContain('five')
    })

    test('it removes a card to stay within the limit', () => {
      const limitHand = ['one', 'two', 'three', 'four', 'five']
      const player = new Player(cardLimit, limitHand, name);

      expect(player.hand).toHaveLength(5);
      player.addCard('six')

      expect(player.hand).toHaveLength(5)
      expect(player.hand).toContain('six')
      expect(player.hand).not.toContain('five')
    })
  })

  describe('discardOne()', () => {
    test('it discards a card from the end of the hand', () => {
      const discardHand = ['one', 'two', 'three', 'four']
      const initialLength = discardHand.length
      const player = new Player(cardLimit, discardHand, name);

      expect(player.hand).toHaveLength(discardHand.length)

      const discarded = player.discardOne()
      
      expect(player.hand).toHaveLength(initialLength - 1)
      expect(discarded).toEqual('four')
    })
  })

  describe('playCard()', () => {
    test('it removes a card from the front of the hand', () => {
      const initialLength = hand.length
      const player = new Player(cardLimit, hand, name);
      
      expect(player.hand).toHaveLength(hand.length)

      const played = player.playCard()

      expect(player.hand).toHaveLength(initialLength - 1)
      expect(played).toEqual('one')
    })
  })
})
