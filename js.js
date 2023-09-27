function l1() {
    //1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

    let valor1 = parseFloat(prompt("Informe o valor 1: "));
    let valor2 = parseFloat(prompt("Informe o valor 2: "));

    if (valor1 > valor2) {
        window.alert(`O valor ${valor1}é o maior.`);
    }
    else {
        window.alert(`O valor ${valor2} é o maior.`);
    }
}

function l2() {

    //2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

    let numero = parseFloat(prompt(`digite um número`))

    if (numero > 0) {
        window.alert(`O numero é positivo`)
    }
    else if (numero < 0) {
        window.alert(`O numero é negativo`)
    }
    else {
        window.alert(`O numero é zero`)
    }
}



function l3() {

    //3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

    let numero1 = parseFloat(prompt('digite o 1° valor:'))
    let numero2 = parseFloat(prompt('digite o 2° valor:'))
    let numero3 = parseFloat(prompt('digite o 3° valor:'))


    if (numero1 > numero2 && numero1 > numero3) {
        alert(`O valor ${numero1} é o maior.`);
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        alert(`O valor ${numero2} é o maior.`);
    }
    else if (numero3 > numero1 && numero3 > numero2) {
        alert(`O valor ${numero3} é o maior.`);
    }
    else if (numero1 = numero2 = numero3)
        alert("todos os numeros são iguais")

    else {
        alert('isso não e um número')

    }
}

function l4() {
    //4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
    // Solicita ao usuário que insira os 3 valores e os armazena em variáveis

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"));
    let soma;

    if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
        alert("Por favor, insira valores diferentes.");

    } else if (valor1 > valor2 && valor1 > valor3) { soma = valor1 + Math.max(valor2, valor3) }

    else if (valor2 > valor1 && valor2 > valor3) { soma = valor2 + Math.max(valor1, valor3) }

    else { soma = valor3 + Math.max(valor1, valor2) }

    alert(`A soma dos dois maiores valores é: ${soma}`);
}


function l5() {
    //5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    let numero1 = parseFloat(prompt("Digite um número"))
    let numero2 = parseFloat(prompt("Digite um número"))
    let numero3 = parseFloat(prompt("Digite um número"))
    let numero4 = parseFloat(prompt("Digite um número"))
    let numero5 = parseFloat(prompt("Digite um número"))
    let numero6 = parseFloat(prompt("Digite um número"))

    M = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6;
    alert(`A média é de ${M}`)
}

function l6() {
    //6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

    alert("DIGITE NÚMEROS DIFERENTES")
    let num1 = parseFloat(prompt("digite o 1° número"))
    let num2 = parseFloat(prompt("digite o 2° número"))
    let num3 = parseFloat(prompt("digite o 3° número"))
    let num4 = parseFloat(prompt("digite o 4° número"))

    alert(`O primeiro número digitado é ${num1}`)
    alert(`O ultimo número digitado é ${num4}`)

    if (num1 > num2 && num1 > num3 && num1 > num4) {
        alert(`O 1° número é o maior`)
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4) {
        alert(`O 2° número é o maior`)
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4) {
        alert(`O 3° número é o maior`)
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3) {
        alert(`O 4° número é o maior`)
    }
}

function l7() {
    //7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.   

    let numero1 = parseInt(prompt("Digite um número"))
    let numero2 = parseInt(prompt("Digite um número"))
    let numero3 = parseInt(prompt("Digite um número"))
    let numero4 = parseInt(prompt("Digite um número"))
    let numero5 = parseInt(prompt("Digite um número"))
    let numero6 = parseInt(prompt("Digite um número"))
    let soma = 0;

    alert(`Os números que você informou foram ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6}`)

    if (numero1 < 72) {
        soma = soma + numero1}

    if (numero2 < 72) {
        soma = soma + numero2}

    if (numero3 < 72) {
        soma = soma + numero3}

    if (numero4 < 72) {
        soma = soma + numero4}

    if (numero5 < 72) {
        soma = soma + numero5}

    if (numero6 < 72) {
        soma = soma + numero6}
 
    alert(soma);
}

function l8() {

    //8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

    alert('Digite somente números maiores que zero e menores que 10')

    let numero1 = parseFloat(prompt("Digite um número"))
    let numero2 = parseFloat(prompt("Digite um número"))
    let numero3 = parseFloat(prompt("Digite um número"))
    let numero4 = parseFloat(prompt("Digite um número"))
    let resultado = ((numero1 + numero2 + numero3 + numero4) / 4);

    if (numero1 <= 10 && numero1 >= 1 && numero2 <= 10 && numero2 >= 1 && numero3 <= 10 && numero3 >= 1 && numero4 <= 10 && numero4 >= 1 && resultado > 5) { alert("parabens você passou no teste"); }

    else if (numero1 <= 10 && numero1 >= 1 && numero2 <= 10 && numero2 >= 1 && numero3 <= 10 && numero3 >= 1 && numero4 <= 10 && numero4 >= 1 && resultado < 5) { alert("Você reprovou no teste"); }

    else alert("Tente novamente")

}

function l9() {
    //9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    let idade = parseFloat(prompt("digite o ano que você nasceu"))

    //para votar tem que ter no mínimo 16 anos ou seja ter nascido no máximo em 2007

    if (idade <= 2007) { alert(`Você pode votar.`) }

    else alert("você ainda não pode votar.")

}

function l10() {

    //10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

    let he = parseFloat(prompt("informe sua altura sua altura (em metros)"))

    let sexo = parseInt(prompt("se seu sexo biológico for feminino digite 1, se for masculino digite 2."))

    let peso;


    if (sexo === 1) { alert(`Seu peso ideal é ${peso = (62.1 * he) - 44.7}`) }

    else if (sexo === 2) { alert(`Seu peso ideal é ${peso = (72.7 * he) - 58}`) }

    else alert("Opção de sexo inválida.")
}

function l11() {

    /*11. Uma micro calculadora
     Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.*/

    let operacao = parseInt(prompt("digite a operação que você quer usando dos número 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação."))
    let valor1 = parseInt(prompt("digite o primeiro número"))
    let valor2 = parseInt(prompt("digite o segundo número"))


    if (operacao === 1) { alert(valor1 + valor2) }

    else if (operacao === 2) { alert(valor1 - valor2) }

    else if (operacao === 3) { alert(valor1 / valor2) }

    else if (operacao === 4) { alert(valor1 * valor2) }

    else alert("opção de operação invalida")
}