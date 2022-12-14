const newLocal = require('prompt-sync')();
const prompt = newLocal;
var nome = prompt('Digite o seu nome:');
var salario = parseFloat(prompt('Informe o seu salário bruto:'));
var imposto = salario * 0.1;
var salario_liq = salario - imposto;
console.log(nome, "se salário líquido é R$ ", salario_liq, ".")