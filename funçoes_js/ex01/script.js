/*Ex1: Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere que o usuário não pode informar letras, 
palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.*/

/*function lernumero() {
    let listanumeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = prompt("Informe um numero");
      tentativa sozinha

let lista = lerNumero();
alert(lista.join(",")); */

/*function lerNumero() {
    let listaNumeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = prompt("Informe um número");
        while (isNaN(numero)) {
            alert("O valor digitado não é um número!");
            numero = prompt("Informe um número");
        }
        listaNumeros.push(parseInt(numero));
    }
    return listaNumeros;
}

let lista = lerNumero();
alert(lista.join(","));  ajuda do professor*/


function readVector() {
 let numbers = [];
 let i = 0;
 while (numbers.length < 5) {
   let input = prompt(`Digite o número inteiro ${i + 1}:`);
   if (input === null || input.trim() === "" || isNaN(input) || !Number.isInteger(Number(input))) {
     alert("Valor inválido. Por favor, insira um número inteiro.");
   } else {
     numbers.push(Number(input));
     i++;
   }
 }
 alert("Números inseridos: " + numbers.join(", "));
}
readVector()

/*com auxilio de colegas que trabalham com progamação*/