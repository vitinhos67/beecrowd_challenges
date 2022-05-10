var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');
/*
A = π . r² (calculation for area of circle)

We can represent in fraction
A = ((a + b) * c) / 2 (Trapaze)
A = b * h / 2 (Calculation for Rigth triangle)
A = (b * b) (Calculation for Square)
A = b * h (rectangle)

*/

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

const PI = 3.14159

const calculateSquare = () => (B * B).toFixed(3)
const calculateRectangle = () => (A * B).toFixed(3)
const calculateTrapaze = () => (((A + B) * C) / 2).toFixed(3)
const calculateAreaCircle = () => (PI * (C * C)).toFixed(3)
const CalculateAreaRigthTriangle = () => ((A * C) / 2).toFixed(3)

let result = `TRIANGULO: ${CalculateAreaRigthTriangle()}
CIRCULO: ${calculateAreaCircle()}
TRAPEZIO: ${calculateTrapaze()}
QUADRADO: ${calculateSquare()}
RETANGULO: ${calculateRectangle()}`

console.log(result)