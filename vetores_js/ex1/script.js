/*Ex1: Crie um sistema de cadastro de funcionários usando funções onde devem ser lidos os nomes, idades e salários de até 
100 pessoas considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.
Exiba todos os cadastrados na página HTML.*/

const funcionarios = [];
function cadastrarFuncionario() {
    let nome, idade, salario;
    do {
        nome = prompt("Informe o nome completo:");
    } while (!nome || nome.trim() === "");
    do {
        idade = parseInt(prompt("Informe a idade:"));
    } while (isNaN(idade) || idade < 14 || idade > 120);
    do {
        salario = parseFloat(prompt("Informe o salário:"));
    } while (isNaN(salario) || salario < 2000 || salario > 20000); 

    funcionarios.push({ nome, idade, salario }); 

    alert(`${nome} cadastrado com sucesso!`);
    return funcionarios; {
        
       // Adiciona o funcionário à lista
    funcionarios.push({ nome, idade, salario });
    alert(`${nome} cadastrado com sucesso!`);
}

// Função para iniciar o cadastro de funcionários
function iniciarCadastro() {
    while (funcionarios.length < 5) {
        cadastrarFuncionario();
    }
    alert("Cadastro finalizado. Total de funcionários cadastrados: " + funcionarios.length);
}
}


// Chama a função para iniciar o cadastro
iniciarCadastro();




