/********************************************************************************************************************************
 * Objetivo: Realizar o desenvolvimento de um sistema que a partir de um número inicial e final realize a separação de par e impar
 * Data: 13/02/2023
 * Versão: 2.0
 ********************************************************************************************************************************/

//Importando a classe calculo
var calculosValidacao = require('./modulo/validacaoCalculo')

//Importando a biblioteca para entradas de dados 
var readline = require('readline')

//Criando objeto para receber os dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

console.log("Bem vindo ão ParOuImpar.com")
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

            if(validacaoNumeros == false){
                entradaDeDados.close()
            }else{

                let separacaoParImpar

                entradaDeDados.question('Você deseja calcular somente números Pares(P), Impares(I) ou os Dois(D): ', function($numPID){

                    let numPID = $numPID.toUpperCase()

                    if(numPID == ''){
                        console.log('Atenção: Não será aceito campos em branco.')
                        entradaDeDados.close()

                    }else if(numPID == 'P' || numPID == 'I' || numPID == 'D'){
                        
                        if(numPID == 'P'){

                            separacaoParImpar = calculosValidacao.separacaoNumPares(numInicial,numFinal)
                            entradaDeDados.close()
                        }else if(numPID == 'I'){

                            separacaoParImpar = calculosValidacao.separacaoNumImpares(numInicial,numFinal)
                            entradaDeDados.close()
                        }else if(numPID == 'D'){
                            separacaoParImpar = calculosValidacao.separacaoParImpar(numInicial,numFinal)
                            entradaDeDados.close()
                        }

                    }else{
                        console.log('Atenção: Escolha par(P), impar(I) ou os dois(D).')
                        entradaDeDados.close()
                    }
                })

            }
        }
    })
})