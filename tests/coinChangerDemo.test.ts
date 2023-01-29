import {coinChanger} from '../src/katas/coinChangerDemo'

describe('coinChanger given an amount in cents will return a object with the coin and how many', () => {

  it('given 0 cents, return no cents', () => {
    expect(coinChanger(0)).toEqual("No Change or invalid input")
  })

  it('given 1 cent, return 1 penny', () => {
    expect(coinChanger(1)).toEqual({'penny': 1})
  })

  it('given 2 cent, return 2 penny', () => {
    expect(coinChanger(2)).toEqual({'penny': 2})
  })

  it('given 5 cents, return 1 nickel', () => {
    expect(coinChanger(5)).toEqual({'nickel': 1})
  })

  it('given 10 cents, return 1 dime', () => {
    expect(coinChanger(10)).toEqual({'dime': 1})
  })

  it('given 20 cents, return 2 dime', () => {
    expect(coinChanger(20)).toEqual({'dime': 2})
  })

  it('given 25 cents, return 1 quarter', () => {
    expect(coinChanger(25)).toEqual({'quarter': 1})
  })

  it('given 50 cents, return 2 quarter', () => {
    expect(coinChanger(50)).toEqual({'quarter': 2})
  })

  it('given 41 cents, return 1 quarter, 1 dime, 1 nickel, 1 penny', () => {
    expect(coinChanger(41)).toEqual({'quarter': 1, 'dime': 1, 'nickel': 1, 'penny': 1})
  })

  it('given 117 cents, return 4 quarter, 1 dime, 1 nickel, 2 penny', () => {
    expect(coinChanger(117)).toEqual({'quarter': 4, 'dime': 1, 'nickel': 1, 'penny': 2})
  })

  it('given negative cents return No Change or invalid input', () => {
    expect(coinChanger(-41)).toEqual("No Change or invalid input")
  })
})

