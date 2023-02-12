/************************************************************************************************************************
 *Objetivo: Realizar o desenvolvimento de um sistema que realiza o calculo de uma tabuada deacor com a escolha do usuario 
 * Data: 12/02/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 ************************************************************************************************************************/

//Importamdo a classe  calculadora
var calculadora = require('./modulo/calculadora')

//Importando a biblioteca para entrada de dados
var readline = require('readline')

//Criando objeto para receber os dados via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem vindo ao calculo rápido da tabuada 3.0 \n ")
console.log("Atenção: A entrada da tabuada deverá estar entre 2 e 100. \n ")
console.log("Nenhuma entrada deverá ficar sem preencimento. \n ")
console.log("O valor até onde será calculada a tabuada deverá ficar entre 1 e 50. \n ")

entradaDeDados.question('Digite o valor da tabuada inicial(Multiplicador): \n', function ($tabuadaInicial) {

    let tabuadaInicial = $tabuadaInicial

    entradaDeDados.question('Digite o valor da tabuada final(Multiplicador): \n', function ($tabuadaFinal) {

        let tabuadaFinal = $tabuadaFinal

        entradaDeDados.question('Digite o valor inicial para multiplicar a tabuada:(Multiplicando) \n', function ($tabuadaInicialMultiplicador) {

            let tabuadaInicialMultiplicador = $tabuadaInicialMultiplicador

            entradaDeDados.question('Digite o valor final para multiplicar a tabuada:(Multiplicando) \n', function ($tabuadaFinalMultiplicador) {

                let tabuadaFinalMultiplicador = $tabuadaFinalMultiplicador

                //Validação de entrada de dados vazia
                if (tabuadaInicial == '' || tabuadaFinal == '' ||
                    tabuadaInicialMultiplicador == '' || tabuadaFinalMultiplicador == '') {

                    console.log('Atenção: preencha todos os campos')
                    entradaDeDados.close()

                } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) ||
                    isNaN(tabuadaInicialMultiplicador) || isNaN(tabuadaFinalMultiplicador)) {

                    console.log('Atenção: preencha os campos com nùmero')
                    entradaDeDados.close()

                } else {

                    let validacaoTabuada

                    //Verifica se a tabuada enta entre 2 a 100
                    validacaoTabuada = calculadora.validacaoTabuada(tabuadaInicial, tabuadaFinal)

                    if (validacaoTabuada == false) {
                        entradaDeDados.close()
                    } else {

                        //Chama a função que verifica ate onde a tabuada será calculada entre 1 e 50
                        validacaoTabuada = calculadora.maxMinTabuada(tabuadaInicialMultiplicador,tabuadaFinalMultiplicador)
                        
                        if(validacaoTabuada == false){
                            entradaDeDados.close()
                        }else{

                            validacaoTabuada = calculadora.calculoTabuada(tabuadaInicial,tabuadaFinal,tabuadaInicialMultiplicador,
                             tabuadaFinalMultiplicador)

                             entradaDeDados.close()

                        }
                    }

                }
            })
        })
    })

})