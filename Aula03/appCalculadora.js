/*************************************************************
 * Objetivo: Calculadora 3.0
 * Data: 30/01/2023
 * Autor: Gustavo Henrique
 * Vesão: 1.0 
 *
*************************************************************/

//Importe da biblioteca para entrada de dados
var readline = require('readline')

console.log('---Calculadora 3.0---')

//Criamos um objeto para manipular entrada de dados digitados pelo usuario
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

//Função de CallBack para retornar o 1 valor digitado
entradaDados.question('Digite o primeiro número: \n', function (valor1) {
    // Variavel local para receber o nome do aluno, que vai ser retornado pela função
    let input1 = valor1.toString().replace(",", ".")

    //Função de CallBack para retornar o 2 valor digitado
    entradaDados.question('Digite o segundo número: \n', function (valor2) {
        // Variavel local para receber o nome do aluno, que vai ser retornado pela função
        let input2 = valor2.toString().replace(",", ".")

        //Estrutura condicional
        //validação para tratar entradas vazias
        if (input1 == '' || input2 == '') {
            console.log("Preencha com números todos os campos ")
        } else if (isNaN(input1) || isNaN(input2)) {
            console.log("Atenção, somente será aceito números")
        } else {

            entradaDados.question('Escolha Soma , Subtração , Divisão , Multiplicação : \n', function (escolha) {
                // Variavel local para receber o nome do aluno, que vai ser retornado pela função
                let operacaoEscolha = escolha

                if (operacaoEscolha == "Soma") {

                    let soma = Number(input1) + Number(input2)
                    console.log("A soma entre " + input1 + " e " + input2 + " é " + soma)

                } else if (operacaoEscolha == "Subtração") {

                    let subtrair = Number(input1) - Number(input2)
                    console.log("A subtração entre " + input1 + " e " + input2 + " é " + subtrair)

                } else if (operacaoEscolha == "Multiplicação") {

                    let multiplicacao = Number(input1) * Number(input2)
                    console.log("A multiplicação entre " + input1 + " e " + input2 + " é " + multiplicacao)

                } else if(operacaoEscolha == "Divisão"){

                    let divisao = Number(input1) / Number(input2)
                    console.log("A divisao entre " + input1 + " e " + input2 + " é " + divisao)

                }else{

                    console.log("Atenção. Escolha Soma , Subtração , Divisão ou Multiplicação")

                }

            })

        }
    })
})