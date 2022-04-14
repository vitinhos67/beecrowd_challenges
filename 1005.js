var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())

let PROD = (A + B) / 2

console.log(`MEDIA = ${PROD.toFixed(6)}`) 