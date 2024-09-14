/*Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 50 pessoas,
 e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, considerando 10% de INSS a descontar.*/

 function cadastrarPessoas() {
  const pessoas = [];
  let opcao = '';

  do {
    opcao = prompt('Digite "C" para cadastrar uma pessoa ou qualquer outra tecla para sair:');
    opcao = opcao.toUpperCase();

    if (opcao === 'C') {
      if (pessoas.length < 50) {
        const nome = prompt('Digite o nome da pessoa:');
        const salarioBruto = parseFloat(prompt('Digite o salário bruto:'));

        const pessoa = {
          nome,
          salarioBruto,
          salarioLiquido: salarioBruto * 0.9,
        };

        pessoas.push(pessoa);
      } else {
        alert('Limite de 50 pessoas atingido!');
      }
    