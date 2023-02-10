/* Objetivo: Realizar calculos matemáaticos (Soma, Subtração, Multiplicação e Divisão)
 * Data: 03/02/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
*/

// ./ para chegar na raiz depois nome da pasta e o nome do arquivo 
var matematica = require('./modulo/calculadora.js')

//Importe da biblioteca para entrada de dados
const { Console } = require('console')
var readline = require('readline')

//Cria um objeto para receber os dados via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

/* Mostra o tipo de variavel(Number, String)
 * Ele verifica o tipo 
 *let nota = 10;
 *console.log(typeof(nota))
 *
 *Se usar o typeof presisa verificar se o tipo de dados não é generico (String)
*/

//Entrada de dados valor1

entradaDeDados.question('valor1 : \n', function (numero1) {
    let valor1 = numero1.replace(',', '.')

    //Entrada de dados valor2
    entradaDeDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.')

        //Entrada de dados tipo de calculo
        entradaDeDados.question('Escolha uma operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function (tipoCalculo) {
            //toUpperCase = converte um String para MAISCULO
            //toLowerCase = converte uma string para minusculo
            let operacao = tipoCalculo.toUpperCase()
            let resultado;

            //validação de entrada de dados vazia
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('Erro: Não é possivel calcular sem preencher todos os dados')
                entradaDeDados.close()//Fecha o objeto de entrada de dados e encerra o programa

                //insNan verifica o tipo de dado
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('Erro: Não é possivel calcular sem a entrada de números')
                entradaDeDados.close()

            } else {

                //Recebe da função o calculo das operações(função que nos criamos)
                resultado = matematica.calcular(valor1, valor2, operacao)
                
                //Valida se o retordo da função é válido, se for exibe o programa
                // senão encerra o programa

                if (resultado === false) {
                    entradaDeDados.close()
                    
                } else {
                //console.log(resultado)
                    entradaDeDados.close()

                }

            }

        })

    })

})