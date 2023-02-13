/*************************************************************************************************************
 * Objetivo: Realizar o back-end para  realizar a separação de números impares e pares, e validação de dados .
 * Data: 13/02/2023
 *  Autor: Gustavo Henrique 
 * Versão: 2.0 
 **********************************************************************************************************/

/**
 * Função que limita o número inicial que deve estar entre 0 até 500 ,
 * e limita número final que deve estar entre 100 até 1000
* */
const validacaoNumInicialFinal = function($numInicial, $numFinal){

    let numInicial = Number($numInicial)
    let numFinal = Number($numFinal)

    let status = true

    if(numInicial <0 || numInicial> 500){
        console.log('O número inicial não pode ser menor que 0 e maior que 500. ')
        status = false

    }else if(numFinal < 100 || numFinal>1000){
        console.log('O número final não pode menor que 100 e maior que 1000')
        status = false

    }else if(numInicial > numFinal){
        console.log('O número inicial não pode ser maior que o número final.')
        status = false

    }else if(numInicial == numFinal){
        console.log('O número inicial não pode ser igual ão número final')
        status = false

    }else{
        status = true
    }

    return status

}

//Função que realiza a separação entre par e impar
const separacaoParImpar = function($numInicial,$numFinal){

    let numInicial = Number($numInicial)
    let numFinal = Number($numFinal)
    let numPar = 0
    let numImpar = 0
    
    console.log('Lista de números pares: ')
    for(let numParesOuImpares = numInicial; numParesOuImpares<= numFinal; numParesOuImpares++){

        if(numParesOuImpares%2 == 0){

            console.log(numParesOuImpares)
            numPar+=1

        }
        
    }
    console.log('A quantida de números pares é: '+numPar)
    console.log(' ')

    console.log('Lista de números Impares: ')
    for(let numParesOuImpares = numInicial; numParesOuImpares<= numFinal; numParesOuImpares++){

        if(numParesOuImpares%2 != 0){

            console.log(numParesOuImpares)
            numImpar+=1

        }
        
    }
    console.log('A quantida de números impares é: '+numImpar)
}

//Função que separa apenas numeros pares
const separacaoNumPares = function($numInicial, $numFinal){

    let numInicial = Number($numInicial)
    let numFinal = Number($numFinal)

    let numPar = 0

    console.log('Lista de números pares: ')
    for(let numParesOuImpares = numInicial; numParesOuImpares<= numFinal; numParesOuImpares++){

        if(numParesOuImpares%2 == 0){

            console.log(numParesOuImpares)
            numPar+=1

        }
        
    }
    console.log('A quantida de números pares é: '+numPar)
    console.log(' ')

}

//Função que separa apenas números impares
const separacaoNumImpares = function($numInicial,$numFinal){
    let numInicial = Number($numInicial)
    let numFinal = Number($numFinal)

    let numImpar = 0

    console.log('Lista de números Impares: ')
    for(let numParesOuImpares = numInicial; numParesOuImpares<= numFinal; numParesOuImpares++){

        if(numParesOuImpares%2 != 0){

            console.log(numParesOuImpares)
            numImpar+=1

        }
        
    }
    console.log('A quantida de números impares é: '+numImpar)

}

//Exportando funções
module.exports = {
    validacaoNumInicialFinal,
    separacaoParImpar,
    separacaoNumPares, 
    separacaoNumImpares
}