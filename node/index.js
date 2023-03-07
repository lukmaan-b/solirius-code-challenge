const romanNumeralGenerator = require('../romanNumeralGenerator');

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.question('Enter a number: ', (number) => {
  console.log(romanNumeralGenerator(Number(number)));
  readLine.close();
}
);