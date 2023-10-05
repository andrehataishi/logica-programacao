
// console(objeto).log(método/atributo)("Olá, mundo!");

// console.log("Olá, mundo!");

// document.write("Olá, documento!");

// window.alert("Olá, janela!");

// ''const'' = variáveis que não variam, cosntantes

// ''let'' = variáveis que variam

// método "prompt()" ler / entrada

// método "parseInt" declara inteiros


function calcular(){


    // Início do programa

    console.log("Início do programa");
    console.log("Lógica da Programação\nProblema: Obter 3 notas de um aluno, calcular a média, exibir a média e a situação do aluno: aprovado em exame ou reprovado.")

    // Declaração das variáveis 

    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    //Cálculo da média 

    const media = (nota1+nota2+nota3)/3

    document.getElementById("resultado").innerHTML = '\nA média do aluno é: ' + media + "<br>";

    console.log("Calculo da média das notas de um aluno. \n\nnota 1:", nota1,  "\nnota 2:", nota2 , "\nnota 3:" ,  nota3 ,"\n\nmédia =" , media );

    if  (media>=7){
        document.getElementById("resultado").innerHTML += "O aluno está aprovado!"
    }else if (media>=5){
        document.getElementById("resultado").innerHTML += "O aluno está de recuperação!"
    }else{
        document.getElementById("resultado").innerHTML += "O aluno está reprovado!"
    }

    console.log("Fim do programa!")
}