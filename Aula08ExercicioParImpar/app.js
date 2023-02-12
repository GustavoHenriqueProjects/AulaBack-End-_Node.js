/********************************************************************************************************************************
 * Objetivo: Realizar o desenvolvimento de um sistema que a partir de um número inicial e final realize a separação de par e impar
 * Data: 12/02/2023
 * Versão: 1.0
 ********************************************************************************************************************************/

//Importando a classe calculo
var calculosValidacao = require('./modulo/calculo')

//Importando a biblioteca para entradas de dados 
var readline = require('readline')

//Criando objeto para receber os dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o número inicial: \n', function($numInicial){
    let numInicial = $numInicial

    entradaDeDados.question('Digite o número final: \n', function($numFinal){
        let numFinal = $numFinal

        if(numInicial == '' || numFinal == ''){
            console.log('Atenção: Digite um número não será aceito entradas em branco')

        }else if(isNaN(numInicial) || isNaN(numFinal)){
            console.log('Atenção: Digite número. Não será aceito letras ou caracteres.')

        }else{

            let validacaoNumeros
            let calculo

            validacaoNumeros = calculosValidacao.validacaoNumInicialFinal(numInicial,numFinal)
            console.log(validacaoNumeros)
        }
    })
})


