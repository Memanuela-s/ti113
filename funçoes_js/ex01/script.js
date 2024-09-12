/*Ex1: Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere que o usuário não pode informar letras, 
palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.*/

function numero () {
let num =[];
for (let i= 0; i<5; i++) {
    let val= prompt(parseInt)("informe um número");
        
    num.push (val);
}

return num;

let numeros =lernumeros ();

}


