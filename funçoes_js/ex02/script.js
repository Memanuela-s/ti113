/*Ex2: Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta, 
considerando que o usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura das notas caso ocorra.*/

function lerNotas() {
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

        /*auxilio do professor*/