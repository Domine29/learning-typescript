import {coinChanger} from '../src/katas/coinChanger'
import * as jest from 'jest'

describe('coinChanger tests', () => {
  
  it('return 2 $1 when paying $3 for an item costing $1.', () => {
    expect(coinChanger(3, 1)).toEqual({1:2})
  })
  
  it('return 2 $1, 2 0.25, 2 0.10, 4 0.01 when paying $5.21 for an item costing $3.47.', () => {
    expect(coinChanger(5.21, 3.47)).toEqual({1:1, 0.25:2, 0.10: 2, 0.01:4})
  })
  
  it('return exact change when paying $53.78 for an item costing $22.59.', () => {
    expect(coinChanger(53.78, 22.59)).toEqual({20:1, 10:1, 1: 1, 0.10: 1, 0.05: 1, 0.01: 4})
  })
})