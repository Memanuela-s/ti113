/*Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de números, considere as premissas abaixo:
• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura;• Não pode informar números negativos. Alerte-o do erro e repita a leitura.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50;• Ao final do cadastro ele tem um outro menu pra escolher exibir:  1 - A lista cadastrada, 2- somente os pares, 3- somente os impares.:*/

function cadastrarNumeros(quantidade) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero;
        while (true) {
            numero = prompt(`Digite o número ${i + 1} de ${quantidade}:`);
            // Verifica se a entrada é um número válido e não negativo
            if (numero === null || numero.trim() === '') {
                alert('Entrada inválida. O valor não pode ser vazio.');
            } else {
                numero = parseInt(numero);
                if (isNaN(numero)) {
                    alert('Entrada inválida. Por favor, insira um número inteiro.');
                } else if (numero < 0) {
                    alert('Número inválido. O valor não pode ser negativo.');
                } else {
                    break;
                }
            }
        }
        numeros.push(numero);
    }
    return numeros;
}
function exibirNumeros(numeros) {
    let continuar = true;
    while (continuar) {
        let escolha = prompt('Escolha a opção de exibição:\n1. A lista cadastrada\n2. Somente os pares\n3. Somente os ímpares');
        let mensagem = '';
        switch (escolha) {
            case '1':
                mensagem = 'Lista cadastrada:\n' + numeros.join('\n');
                break;
            case '2':
                let pares = numeros.filter(num => num % 2 === 0);
                mensagem = 'Números pares:\n' + pares.join('\n');
                break;
            case '3':
                let impares = numeros.filter(num => num % 2 !== 0);
                mensagem = 'Números ímpares:\n' + impares.join('\n');
                break;
            default:
                alert('Opção inválida. Escolha uma das opções fornecidas.');
                continue; // Pular para o início do loop para que o usuário possa tentar novamente
        }
        alert(mensagem);
        continuar = confirm('Gostaria de consultar outra lista? Se sim, aperte OK para continuar ou CANCELAR para SAIR');
    }
}
function menuPrincipal() {
    while (true) {
        let opcao = prompt('Escolha a quantidade de números a cadastrar:\n1. 5\n2. 15\n3. 25\n4. 50\nDigite o número da opção desejada:');
        let quantidade;
        switch (opcao) {
            case '1':
                quantidade = 5;
                break;
            case '2':
                quantidade = 15;
                break;
            case '3':
                quantidade = 25;
                break;
            case '4':
                quantidade = 50;
                break;
            default:
                alert('Opção inválida. Por favor, escolha uma das opções fornecidas.');
                continue;
        }
        let numeros = cadastrarNumeros(quantidade);
        let exibir = prompt('Deseja exibir os números cadastrados? (SIM/NÃO)').toUpperCase();
        if (exibir === 'SIM') {
            exibirNumeros(numeros);
        }
        let continuar = prompt('Deseja realizar outra operação? (SIM/NÃO)').toUpperCase();
        if (continuar !== 'SIM') {
            break;
        }
    }
}
// Chamada do menu principal
menuPrincipal();
