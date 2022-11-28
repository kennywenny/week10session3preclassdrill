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

  it('should pick out an element in an array of strings', () => {
    const source = ['code', 'dev', 'nerd']
    const element = 'nerd'
    const expected = true
    
    const actual = contains(source, element)

    expect(actual).toBe(expected)
  })

  it('should detect an element not in an array of strings', () => {
    const source = ['code', 'dev', 'nerd']
    const element = 'genius'
    const expected = false
    
    const actual = contains(source, element)

    expect(actual).toBe(expected)
  })
})
/*
Test cases:

Ex:
Input: ['code', 'dev', 'nerd']  'nerd'
Output: true

Input: ['code', 'dev', 'nerd']  'genius'
Output: false
*/