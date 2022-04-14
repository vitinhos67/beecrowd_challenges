let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let nome = lines.shift();
let salario = lines.shift();
let vendas = lines.shift();

class Funcionario {
    constructor(nome, salario, vendas) {
        this.nome = nome;
        this.salario = Number(salario);
        this.valorVendas = parseFloat(vendas);
        this.valorFinal;
    }

    getNome(){
        return this.nome
    }

    calSalario() {
        const comissao = this.valorVendas  * 15 / 100;
        
        this.valorFinal = (this.salario + comissao);
        
        return this.valorFinal.toFixed(2);
    }
}

const funcionario = new Funcionario(nome, salario, vendas);

console.log(`TOTAL = R$ ${funcionario.calSalario()}`);
