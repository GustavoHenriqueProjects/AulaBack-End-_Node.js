/*****************************************************************************************
 * Objetivo: Realizar o back-end para realizar os calculos da tabuada e validação de dados
 * Data: 09/02/2023
 * Autor: GustavoHenrique
 * Versão: 1.0
 *****************************************************************************************/

//Retorna a validação da tabuada para verificar se ela esta entre 2 a 100 e se não são iguais
const validacaoTabuada = function($tabuadaInicial, $tabuadaFinal){

    let tabuadaInicial = Number($tabuadaInicial)
    let tabuadaFinal = Number($tabuadaFinal)
    let statusValidacao = true

    if((tabuadaInicial<2 || tabuadaInicial>100) || ( tabuadaFinal <2 || tabuadaFinal> 100)){
       console.log('Atenção: A entrada de dados devera ficar entre 2 e 100')
       statusValidacao = false
    }else if(tabuadaInicial == tabuadaFinal){
        console.log('Atenção a tabuada inicial e final não podem ser iguais.')
        statusValidacao = false
    }else{
        statusValidacao = true
    }

    return statusValidacao
}

//Verifica o multiplicando max e min está entre 1 a 50
const maxMinTabuada = function($tabuadaInicialMultiplicador, $tabuadaFinalMultiplicador){

    let tabuadaInicialMultiplicador = Number($tabuadaInicialMultiplicador)
    let tabuadaFinalMultiplicador = Number($tabuadaFinalMultiplicador)
    let statusMaxMin = true

    if((tabuadaInicialMultiplicador <1 || tabuadaInicialMultiplicador> 50) || (tabuadaFinalMultiplicador<1 || tabuadaFinalMultiplicador>50)){

        console.log('O valor onde será calculado a tabuada deverá ficar entre 1 e 50')
        return statusMaxMin = false

    }else{
        return statusMaxMin
    }

}

//Função responsavel por realizar o calculo da tabuada
const calculoTabuada = function($tabuadaInicial,$tabuadaFinal,$tabuadaInicialMultiplicador, $tabuadaFinalMultiplicador){
    let tabuadaInicialMultiplicador = Number($tabuadaInicialMultiplicador)
    let tabuadaFinalMultiplicador = Number($tabuadaFinalMultiplicador)
    let tabuadaInicial = Number($tabuadaInicial)
    let tabuadaFinal = Number($tabuadaFinal)

    for(let multiplicando = tabuadaInicialMultiplicador; multiplicando<= tabuadaFinalMultiplicador; multiplicando++){

        produto = tabuadaInicial * multiplicando 
        console.log(`${tabuadaInicial} X ${multiplicando} = ${produto}`)
    }

    console.log('-----------------------------------------------------')

    for(let multiplicando = tabuadaInicialMultiplicador; multiplicando<= tabuadaFinalMultiplicador; multiplicando++){

        produto = tabuadaFinal * multiplicando 
        console.log(`${tabuadaFinal} X ${multiplicando} = ${produto}`)
    }

}

//Exportando funções

module.exports = {
validacaoTabuada,
maxMinTabuada,
calculoTabuada
}