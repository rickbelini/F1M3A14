for (i = 1; i <= 5; i++) {
  console.log("Pessoa ", i)
  const newLocal = require('prompt-sync')();
  const prompt = newLocal;
  var nome = prompt('Digite o seu nome:');
  var salario = parseFloat(prompt('Informe o seu salário bruto:'));
  var dependentes = parseInt(prompt('Digite o número de dependentes:') + 1);
  var rp = salario / dependentes;
  if (rp >= 500) {
    if (salario <= 1903.98) {
      var imposto = salario * 0.05;
    } else if (salario <= 2826.65) {
      var imposto = salario * 0.075;
    } else {
      var imposto = salario * 0.15;
    }
  } else {
    var imposto = 0;
  }
  var salario_liq = salario - imposto;
  console.log(nome, "seu salário líquido é R$ ", salario_liq, ".");
}