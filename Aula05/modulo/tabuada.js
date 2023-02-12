/***************************************************************************************
 *Objetivo: Realizar o calculo de uma tabuada tendo duas entradas a tabuada e o contador
 *Data: 09/02/2023
 *Autor: Gustavo Henrique
 *Versão 1.0
***************************************************************************************/

//Retorna o resultado da tabuada
const calcularTabuada = function (multiplicando, maximoMultiplicador) {

    let tabuada = Number(multiplicando)
    let maxContador = Number(maximoMultiplicador)

    //Start da repetição

    let cont = 0
    let resultado
    let status = true

    //Validação de entrada vazia e entrada 0
    if (tabuada == 0 || maxContador == 0) {
        status = false

    //Validação de entrada de caracteres
    } else if (isNaN(tabuada) || isNaN(maxContador)) {
        status = false
    } else {


        // while (cont <= maxContador) {

        //     resultado = tabuada * cont

        //     //2X0 = 0
        //     console.log(tabuada + ' X ' + cont + ' = ' + resultado)

        //     //cont = cont +1
        //     //cont++

        //     cont += 1
        // }

        for(let cont = 0; cont <= maxContador; cont++){

            resultado = tabuada * cont
            console.log(`${tabuada} X ${cont} = ${resultado}`)

        }

    }

    return status


}
//Chamada da função
//calcularTabuada(2, 10)

module.exports = {
    calcularTabuada
}