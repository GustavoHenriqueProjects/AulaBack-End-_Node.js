/********************************************
*Objetivo: Arquivo de funçôes para realizar calculo matemáticos
*Data: 03/02/2023
*Autor: Gustavo
*Versão: 1.0
********************************************/

//Realizar calculo matemático das 4 operações(Somar, Subtrair, Multiplicar e Dividir)
// function calcular(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1)
//     let valor2 = Number(numero2)
//     let operacao = tipoCalculo.toUpperCase()

//     let resultado
//     let status = true

//     //Quando o bloco tem somente uma resposta (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR ) na condicional não é nessario chave
//     // if (operacao == 'SOMAR')
//     //     resultado = valor1 + valor2
//     // else if (operacao == 'SUBTRAIR')
//     //     resultado = valor1 - valor2
//     // else if (operacao == 'MULTIPLICAR')
//     //     resultado = valor1 * valor2
//     // else if (operacao == 'DIVIDIR') {
//     //     //Validação de divisão por 0
//     //     if (valor2 == 0) {
//     //         console.log('Erro: Não é possivel dividir por 0')
//     //         status = false
//     //     } else {
//     //         resultado = valor1 / valor2
//     //     }
//     // } else {
//     //     console.log('Erro: A operação informada não é válida, confira a sua entrada')
//     //     status = false
//     // }


//     switch (operacao) {

//         case 'SOMAR': resultado = valor1 + valor2
//             break

//         case 'SUBTRAIR': resultado = valor1 - valor2
//             break

//         case 'MULTIPLICAR': resultado = valor1 * valor2
//             break

//         case 'DIVIDIR':
//             //Validação por 0
//             if (valor2 == 0) {
//                 console.log('Erro: Não é possivel dividir por 0')
//                 status = false
//             } else {
//                 resultado = valor1 / valor2
//             }
//             break
        
//         default: 
//         console.log('Erro: A operação informada não é válida, confira a sua entrada')
//        status = false
        
//     }

    

//     //Validação para tratar a variavel resultado quando nenhum calculo é realizado
//     if (resultado != undefined) {
//         return resultado
//     } else {
//         return status
//     }

// }

const calcular = function(numero1, numero2, tipoCalculo){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()

    let resultado
    let status = true

    //Quando o bloco tem somente uma resposta (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR ) na condicional não é nessario chave
    // if (operacao == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if (operacao == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if (operacao == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if (operacao == 'DIVIDIR') {
    //     //Validação de divisão por 0
    //     if (valor2 == 0) {
    //         console.log('Erro: Não é possivel dividir por 0')
    //         status = false
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('Erro: A operação informada não é válida, confira a sua entrada')
    //     status = false
    // }


    switch (operacao) {

        case 'SOMAR': 
        resultado = SOMAR(valor1, valor2)
            break

        case 'SUBTRAIR': 
        
        resultado = SUBTRAIR(valor1,valor2)
            break

        case 'MULTIPLICAR': 
        resultado = MULTIPLICAR(valor1,valor2)
            break

        case 'DIVIDIR':
            //Validação por 0
            if (valor2 == 0) {
                console.log('Erro: Não é possivel dividir por 0')
                status = false
            } else {
                resultado = DIVIDIR(valor1,valor2)
            }
            break
        
        default: 
        console.log('Erro: A operação informada não é válida, confira a sua entrada')
       status = false
        
    }

    //Forma 03(Arrow Funcion) Exemplo de funções privadas
    const SOMAR = (valor1,valor2) => valor1 + valor2
    const SUBTRAIR = (valor1,valor2) => valor1 - valor2
    const MULTIPLICAR = (valor1,valor2) => valor1 * valor2
    const DIVIDIR = (valor1,valor2) => valor1 / valor2

    //Validação para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined) {
        return Number(resultado.toFixed(2))
    } else {
        return status
    }
}

//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}