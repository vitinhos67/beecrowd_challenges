var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159
const raio = parseFloat(lines.shift())

const area = pi * raio * raio

console.log(`A=${area.toFixed(4)}`)

console.log(`A=${area}`)