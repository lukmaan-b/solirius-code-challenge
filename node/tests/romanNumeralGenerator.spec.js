const romanNumeralGenerator = require("../../romanNumeralGenerator")

describe('romanNumeralGenerator', () => {
  it('should return a string', () => {
    expect(typeof romanNumeralGenerator(1)).toBe('string')
  })
  it('should return "Enter a number" if no number is passed', () => {
    expect(romanNumeralGenerator()).toBe('Enter a number')
  })
  it('should return "Enter a number" if a string is passed', () => {
    expect(romanNumeralGenerator('string')).toBe('Enter a number')
  })
  it('should return "Enter a number" if a NaN is passed', () => {
    expect(romanNumeralGenerator(NaN)).toBe('Enter a number')
  })
  it('should return "Number too large" if a number greater than 3999 is passed', () => {
    expect(romanNumeralGenerator(4000)).toBe('Number too large')
  })
  it('should return "Number too small" if a number less than 1 is passed', () => {
    expect(romanNumeralGenerator(0)).toBe('Number too small')
  })
  it('should return "I" if 1 is passed', () => {
    expect(romanNumeralGenerator(1)).toBe('I')
  })
  it('should return "V" if 5 is passed', () => {
    expect(romanNumeralGenerator(5)).toBe('V')
  })
  it('should return "X" if 10 is passed', () => {
    expect(romanNumeralGenerator(10)).toBe('X')
  })
  it('should return "L" if 50 is passed', () => {
    expect(romanNumeralGenerator(50)).toBe('L')
  })
  it('should return "C" if 100 is passed', () => {
    expect(romanNumeralGenerator(100)).toBe('C')
  })
  it('should return "D" if 500 is passed', () => {
    expect(romanNumeralGenerator(500)).toBe('D')
  })
  it('should return "M" if 1000 is passed', () => {
    expect(romanNumeralGenerator(1000)).toBe('M')
  })
})