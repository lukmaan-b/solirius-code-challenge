/**
 * romanNumeralGenerator
 * Takes an integer and returns a string of the roman numeral
 * @param {number} int 
 * @returns {string} roman numeral
 */
function romanNumeralGenerator(int) {
  if (int < 0 || !int || typeof int !== 'number') {
    return 0
  }
  const unitArr = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const TenArr = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const HundredArr = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const ThousandArr = ["M", "MM", "MMM"]

  const arr = [
    unitArr,
    TenArr,
    HundredArr,
    ThousandArr,
  ]

  let str = ''
  // loop through each stage (Units -> Tens -> Hundreds -> Thousands)
  for (let i = 0; i < 4; i++) {
    const currentIndex = Math.floor(int % Math.pow(10, i + 1) / Math.pow(10, i)) - 1
    if (arr[i][currentIndex]) {
      str = `${arr[i][currentIndex]}${str}`
    }
  }
  return str
}
