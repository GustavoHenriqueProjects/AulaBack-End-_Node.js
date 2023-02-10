/************************************************************************
 * Objetivo: Arquivo de validação de informações e validação da notas.
 * Data: 03/02/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 **********************************************************************/

// Criando função que reponsavel por executa a validacao de notas.

const validacaoNotas = function ($nota1, $nota2, $nota3, $nota4) {

    let primeiraNota = Number($nota1)
    let segundaNota = Number($nota2)
    let terceiraNota = Number($nota3)
    let quartaNota = Number($nota4)

    let status = true
    let resultadoAprovado
    let resultadoRecuperacao 

    if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 ||
        segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 ||
        quartaNota < 0 || quartaNota > 100) {

        console.log('Atenção: Os valores digitados devem estar obrigatóriamente entra 0 e 100')
    } else {

        let resultadoNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4

        if (resultadoNotas >= 70) {

            resultadoAprovado = 'Aprovado'

        } else if (resultadoNotas < 50) {

            resultadoAprovado = 'Reprovado'

        }else if(resultadoNotas>= 50 || resultadoNotas <= 69){

            status = false

        }

    }

    if(resultado = true){
        return status
    }else{
        return status
    }

}

module.exports = {
    validacaoNotas
}