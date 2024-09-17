/*Ex2: Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta, 
considerando que o usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura das notas caso ocorra.*/
function lerNotas() {
    let notas = [];
    
    while (notas.length < 4) {
      let nota = prompt(`Digite a nota ${notas.length + 1} (total: 4):`);
      
      // Valida a nota
      if (nota === null || nota.trim() === '') {
        alert('Entrada inválida. O valor não pode ser vazio.');
      } else {
        nota = parseFloat(nota);
        if (isNaN(nota)) {
          alert('Entrada inválida. Por favor, insira um número válido.');
        } else if (nota < 0 || nota > 10) { // Considerando notas de 0 a 10
          alert('Nota inválida. Por favor, insira um número entre 0 e 10.');
        } else {
          notas.push(nota);
        }
      }
    }
    
    // Calcula a média
    let soma = notas.reduce((acc, curr) => acc + curr, 0);
    let media = soma / notas.length;
  
    // Exibe as notas e a média
    let mensagem = `Notas cadastradas:\n${notas.join('\n')}\n\nMédia: ${media.toFixed(2)}`;
    alert(mensagem);
  }
  
  // Chamada da função
  lerNotas();
  


/*function lerNotas() {
    const listaNotas = [];
    for (let i = 0; i < 4; i++) {
        let numero = prompt("Informe uma nota: ");
        while (isNaN(numero)) {
            alert("O valor digitado não é um nota!");
            numero = prompt("Informe uma nota: ");
        }
        listaNotas.push(parseInt(numero));
    }
    return listaNotas;
}
function calcularMedia(notas) {
    const quantidadeNotas = notas.length;
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / quantidadeNotas;
    return media;
}
let lista = lerNotas();
let resultado = calcularMedia(lista);
alert(`Notas Informadas: ${lista.join(",")}
        Média: ${resultado}`);

        /* correção do professor*/