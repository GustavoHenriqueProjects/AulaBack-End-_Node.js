/*************************************************************************************************************
 * Objetivo: Realizar o back-end para  realizar a separação de números impares e pares, e validação de dados .
 * Data: 12/02/2023
 *  Autor: Gustavo Henrique 
 * Versão: 1.0 
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

//Exportando funções
module.exports = {
    validacaoNumInicialFinal
}