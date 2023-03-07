function romanNumeralGenerator(int) {
  if (int < 0 || !int || typeof int !== 'number') {
    return 0
  }
  const unitArr = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const TenArr = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const HundredArr = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const ThousandArr = ["M", "MM", "MMM"]

  const uIndex = Math.floor(int % 10) - 1;
  const tIndex = Math.floor(int % 100 / 10) - 1;
  const hIndex = Math.floor(int % 1000 / 100) - 1;
  const thIndex = Math.floor(int % 10000 / 1000) - 1;

  const uStr = unitArr[uIndex]
  const tStr = TenArr[tIndex]
  const hStr = HundredArr[hIndex]
  const thStr = ThousandArr[thIndex]

  return `${thStr || ''}${hStr || ''}${tStr || ''}${uStr || ''}`
}
