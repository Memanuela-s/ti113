/*Ex3: Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, 
e após verificar quantas vogais foram lidas e mostre somente consoantes no alerta.*/



/*let letras = [];
let contador = 0;
let mensagem = "";

//leitura de uma letra no vetor de letras
for (let i = 0; i < 10; i++) {
    let letra = prompt("Informe uma Letra: ");
    letras.push(letra);
}

for (let j = 0; j < letras.length; j++) {
    //converto o texto pra maiúsculo
    let letra = letras[j].toUpperCase();
    //Verifico se tem alguma vogal
    let temA = (letra == "A"); // true ou false
    let temE = (letra == "E"); // true ou false
    let temI = (letra == "I"); // true ou false
    let temO = (letra == "O"); // true ou false
    let temU = (letra == "U"); // true ou false
    
    //se tiver alguma vogal ele não entra no if
    if ((temA || temE || temI || temO || temU) == true) {
        contador += 1;
        mensagem += letra + "\n";
    }
    else // Se não for vogal e sim cosoante//

}
}
alert(Foram + "\n" + "Vogais " + + Foram + "\n" + " Consoantes!") - TENTATIVA*/


function contarVogaisEMostrarConsoantes() {
    // Cria um vetor vazio para armazenar as letras
    const letras = [];
  
    // Loop para ler 10 letras
    for (let i = 0; i < 10; i++) {
      let letra = prompt("Digite a " + (i + 1) + "ª letra:");
      // Converte a letra para minúscula para facilitar a comparação
      letra = letra.toLowerCase();
      letras.push(letra);
    }
  
    // Função para verificar se uma letra é vogal
    function ehVogal(letra) {
      const vogais = ['a', 'e', 'i', 'o', 'u'];
      return vogais.includes(letra);
    }
  
    // Contador de vogais
    let contadorVogais = 0;
  
    // String para armazenar as consoantes
    let consoantes = "";
  
    // Percorre o vetor de letras
    for (let i = 0; i < letras.length; i++) {
      if (ehVogal(letras[i])) {
        contadorVogais++;
      } else {
        consoantes += letras[i] + " ";
      }
    }
  
    // Mostra o resultado em um alerta
    alert("Foram lidas " + contadorVogais + " vogais.\nAs consoantes são: " + consoantes);
  }
  
  // Chama a função para executar o algoritmo
  contarVogaisEMostrarConsoantes();


  /*function lerLetras() {
    let lista = [];
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma letra:");
        while (isNaN(letra) === false) {
            alert("O valor digitado não é uma letra!")
            letra = prompt("Informe uma letra novamente:");
        }
        lista.push(letra);
    }
    return lista;
}
function mostrarConsoantes(lista) {
    let contador = 0;
    let mensagem = "";
    for (let i = 0; i < lista.length; i++) {
        let vogais = ['a', 'e', 'i', 'o', 'u'];
        let letra = lista[i].toLowerCase();
        // se a letra está na lista de vogais, 
        // é uma vogal e retorna 'true'
        let ehVogal = vogais.includes(letra);
        if (ehVogal === true)
            contador++;
        else
            mensagem += lista[i] + "\n";
    }
    alert(mensagem + "\n Teve " + contador + " Vogais");
}

let listaLetras = lerLetras();
mostrarConsoantes(listaLetras)*/