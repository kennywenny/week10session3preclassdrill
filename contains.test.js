const contains = require('./contains')

describe('contains function', () => {
  it('should pick out an element contained in an array of numbers', () => {
    const source = [1, 2, 3]
    const expected = true
    
    const actual = contains(source, 1)

    expect(expected).toBe(actual)
  })
  
  it('should detect non-member element of an array of numbers', () => {
    const source = [1, 2, 3]
    const expected = false
    
    const actual = contains(source, 4)

    expect(expected).toBe(actual)
  })
})
/*
Test cases:

Ex:
Input: [1,2,3]  4
Output: false

Input: ['code', 'dev', 'nerd']  'nerd'
Output: true

Input: ['code', 'dev', 'nerd']  'genius'
Output: false
*/