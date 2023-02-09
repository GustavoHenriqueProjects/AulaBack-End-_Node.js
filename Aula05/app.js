// ./ para chegar na raiz depois nome da pasta e o nome do arquivo 
var Calculo = require('./modulo/tabuada.js')

//Importe da biblioteca para entrada de dados
const { Console } = require('console')
var readline = require('readline')
const { calcularTabuada } = require('./modulo/tabuada.js')

//Cria um objeto para receber os dados via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('valor1 : \n', function (numero1) {
    let valor1 = numero1.replace(',', '.')

    //Entrada de dados valor2
    entradaDeDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.')
        let resultado

        if (valor1 == '' || valor2 == '') {
            console.log('Erro: Não é possivel calcular sem preencher todos os dados')
            entradaDeDados.close()//Fecha o objeto de entrada de dados e encerra o programa

    //insNan verifica o tipo de dado
        } else{

            resultado = calcularTabuada(valor1,valor2)

            if(resultado == false){

               console.log("Não foi possivel realizar o calculo")
               entradaDeDados.close()

            }else{
               entradaDeDados.close()

            }

        }
    })

})