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

/**
 * romanNumeralGenerator
 * Takes an integer and returns a string of the roman numeral
 * @param {number} int 
 * @returns {string} roman numeral
 */
function romanNumeralGenerator(int) {
  if (typeof int !== 'number' || isNaN(int)) {
    return "Enter a number"
  }
  if (int > 3999) {
    return 'Number too large'
  }
  if (int < 1) {
    return 'Number too small'
  }

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

module.exports = romanNumeralGenerator