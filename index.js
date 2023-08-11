const calculator = require('birthday-calculator');
 
const date = new Date('2003,05,27');
const result = calculator.getDayWhenBorn(date);
console.log(result);
