/*Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 50 pessoas,
 e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, considerando 10% de INSS a descontar.*/

function cadastrarEExibirPessoas() {
  let pessoas = [];
  let limitePessoas = 50;

  for (let i = 0; i < limitePessoas; i++) {
  
    let nome = prompt('Digite o nome da pessoa:');
    let salarioBruto = parseFloat(prompt('Digite o salário bruto:'));

    // Valida o salário bruto
    while (isNaN(salarioBruto) || salarioBruto < 0) {
      alert('Salário bruto inválido. Digite um valor numérico positivo.');
      salarioBruto = parseFloat(prompt('Digite o salário bruto:'));
    }

    let salarioLiquido = salarioBruto * 0.9; // Desconto de 10%

    pessoas.push({
      nome: nome,
      salarioBruto: salarioBruto,
      salarioLiquido: salarioLiquido
    });

    // Se o limite de pessoas for alcançado, sair do loop
    if (pessoas.length >= limitePessoas) {
      alert(`Limite de ${limitePessoas} pessoas atingido!`);
      break;
    }

  }

  // Construir a string do relatório
  let relatorio = 'Relatório de Pessoas Cadastradas\n';
  relatorio += '------------------------------------\n';
  relatorio += 'Nome /  / Salário Bruto / / Salário Líquido\n';

  for (let j = 0; j < pessoas.length; j++) {
    let pessoa = pessoas[j];
    relatorio += `${pessoa.nome.padEnd(15)}\tR$ ${pessoa.salarioBruto.toFixed(2).padStart(10)}\tR$ ${pessoa.salarioLiquido.toFixed(2).padStart(10)}\n`;
  }

  // Exibe o relatório
  alert(relatorio);
}

// Chamada da função
cadastrarEExibirPessoas();

