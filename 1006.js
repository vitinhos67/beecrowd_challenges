var input = require('fs').readFileSync("dev/stdin", 'utf8');
var lines = input.split('\n');

let [A, B, C, D] = lines;

A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
D = parseInt(D);

console.log(`DIFERENCA = ${(A * B - C * D)}`);



