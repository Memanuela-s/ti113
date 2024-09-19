/*Ex2: Crie um sistema de cadastro de alunos usando funções onde devem ser lidos os nomes, matriculas, matérias e três 
notas de até 100 pessoas e mostre-os no fim do cadastro com as respectivas médias conforme os seguintes critérios: 
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Matrículas válidas com 8 caracteres de números (00000000 a 99999999).
• As notas informadas devem ser válidas e não podem ser inferiores a 0 e acima de 10. 
• Deve-se cadastrar no mínimo 5 alunos.
• As médias devem ser mostradas com suas notas no seguinte formato: 
• “N1: 0,00 / N2: 0,00 / N3: 0,00 / Media: 0,00”. 
Exiba todos os cadastrados na página HTML.*/


const alunos = [];

function validarEntrada(promptMsg, validator) {
  let valor;
  do {
    valor = prompt(promptMsg);
  } while (!validator(valor));
  return valor;
}

function cadastrarAluno() {
  const nome = validarEntrada("Informe o nome completo (nome e sobrenome):", nome => nome.trim() && nome.split(" ").length >= 2);
  let matricula = validarEntrada("Informe a matrícula (8 dígitos):", matricula => /^\d{8}$/.test(matricula));

  // Verificar se a matrícula já existe
  while (alunos.some(aluno => aluno.matricula === matricula)) {
    console.log("Matrícula já cadastrada. Tente novamente.");
    matricula = validarEntrada("Informe a matrícula (8 dígitos):", matricula => /^\d{8}$/.test(matricula));
  }

  const materias = validarEntrada("Informe as matérias separadas por vírgula:", materias => materias.split(',').every(m => m.trim()));

  // Permitir um número variável de notas
  const numNotas = parseInt(prompt("Quantas notas deseja cadastrar?"));
  const notas = [];
  for (let i = 1; i <= numNotas; i++) {
    notas.push(validarEntrada(`Informe a nota ${i} (entre 0 e 10):`, nota => !isNaN(nota) && nota >= 0 && nota <= 10));
  }

  alunos.push({ nome, matricula, materias, notas });
  alert(`${nome} cadastrado com sucesso!`);
}
