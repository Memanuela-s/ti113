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


// Função para validar o nome completo
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ]+\s[A-Za-zÀ-ÿ]+$/;
    return regex.test(nome.trim());
}

// Função para validar matrícula
function validarMatricula(matricula) {
    const regex = /^\d{8}$/;
    return regex.test(matricula.trim());
}

// Função para validar notas
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}

// Função para calcular a média
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

// Função principal para cadastrar alunos
function cadastrarAlunos() {
    const alunos = [];
    const quantidadeMinima = 2;

    while (alunos.length < quantidadeMinima) {
        const nome = prompt("Informe o nome completo do aluno (nome e sobrenome):");
        if (!validarNome(nome)) {
            alert("Nome inválido. Por favor, informe um nome completo (nome e sobrenome).");
            continue;
        }

        const matricula = prompt("Informe a matrícula do aluno (8 dígitos):");
        if (!validarMatricula(matricula)) {
            alert("Matrícula inválida. Deve conter exatamente 8 dígitos.");
            continue;
        }

        const notas = [];
        for (let i = 1; i <= 3; i++) {
            let nota;
            do {
                nota = parseFloat(prompt(`Informe a nota ${i} (0 a 10):`));
                if (!validarNota(nota)) {
                    alert("Nota inválida. Deve ser entre 0 e 10.");
                }
            } while (!validarNota(nota));
            notas.push(nota);
        }

        const media = calcularMedia(notas);
        alunos.push({ nome, matricula, notas, media });
    }

    exibirAlunos(alunos);
}

// Função para exibir alunos cadastrados
function exibirAlunos(alunos) {
    let resultado = "Alunos cadastrados:\n";
    alunos.forEach(aluno => {
        resultado += `Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, ` +
                    `N1: ${aluno.notas[0].toFixed(2).replace('.', ',')} / ` +
                    `N2: ${aluno.notas[1].toFixed(2).replace('.', ',')} / ` +
                    `N3: ${aluno.notas[2].toFixed(2).replace('.', ',')} / ` +
                    `Media: ${aluno.media.toFixed(2).replace('.', ',')}\n`;
    });
    alert(resultado);
}

// Iniciar o cadastro
cadastrarAlunos();
