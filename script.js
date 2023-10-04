
// console(objeto).log(método/atributo)("Olá, mundo!");

// console.log("Olá, mundo!");

// document.write("Olá, documento!");

// window.alert("Olá, janela!");

console.log("Início do programa");
console.log("Lógica da Programação\nProblema: Obter 3 notas de um aluno, calcular a média, exibir a média e a situação do aluno: aprovado em exame ou reprovado.")


// ''const'' = variáveis que não variam, cosntantes

// ''let'' = variáveis que variam

// método "prompt()" ler / entrada
// método "parseInt" declara inteiros

// Declaração das variáveis 

const nota1 = parseInt(prompt("Digite a primeira nota"));
const nota2 = parseInt(prompt("Digite a segunda nota"));
const nota3 = parseInt(prompt("Digite a terceira nota"));
const separador = "*****************"

//Cálculo da média 

const media = (nota1+nota2+nota3)/3


console.log("Calculo da média das notas de um aluno. \nnota 1:", nota1,  "\nnota 2:", nota2 , "\nnota 3:" ,  nota3 ,"\nmédia =" , media );

console.log("Fim do programa!")