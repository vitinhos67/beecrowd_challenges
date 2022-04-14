let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let id = lines.shift();
let carga = lines.shift();
let hora = lines.shift();

class Funcionario {
    constructor(id, cargaHoraria, hora) {
        this.id = id;
        this.cargaHoraria = cargaHoraria;
        this.valorHora = parseFloat(hora);
    }

    getFuncionario() {
        return this.id;
    }

    valorFinal() {
        this.valorHora = this.valorHora.toFixed(2);

        return (this.cargaHoraria * this.valorHora).toFixed(2);
    }
}

const funcionario = new Funcionario(id, carga, hora);

console.log(`NUMBER = ${funcionario.getFuncionario()}
SALARY = U$ ${funcionario.valorFinal()}`);
