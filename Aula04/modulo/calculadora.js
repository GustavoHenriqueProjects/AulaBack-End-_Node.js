/********************************************
*Objetivo: Arquivo de funçôes para realizar calculo matemáticos
*Data: 03/02/2023
*Autor: Gustavo
*Versão: 1.0
********************************************/

//Realizar calculo matemático das 4 operações(Somar, Subtrair, Multiplicar e Dividir)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()

    let resultado

    //Quando o bloco tem somente uma resposta (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR ) na condicional não é nessario chave
    if (operacao == 'SOMAR')
        resultado = valor1 + valor2
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2
    else if (operacao == 'DIVIDIR') {
        //Validação de divisão
        if (valor2 == 0) {
            console.log('Erro: Não é possivel dividir por 0')
        } else {
            resultado = valor1 / valor2
        }
    } else {
        console.log('Erro: A operação informada não é válida, confira a sua entrada')
        
    }

    //Validação para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined) {
        return resultado
    } else {
        return false
    }

}

//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}