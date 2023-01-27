/*************************************************************
 * Objetivo: Realizar a média escolar de 4 notas dos alunos
 * Data: 27/01/2023
 * Autor: Gustavo Henrique
 * Vesão: 1.0 
 *
*************************************************************/

console.log('Sistema de Calculo de Média Escolares')

//Importe da biblioteca para entrada de dados
var readline = require('readline')

//Criamos um objeto para manipular entrada de dados
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

/* Conceitos de criação de variaveis
 *
 * var - Toda a variavel criada var tem por objetiva ser um escopo global,
 * ou seja, ela podera ser utilizada em diversos lugares do projeto
 * 
 * let - Toda variavel como let, tem por objetivo ser um escopo local,
 * ou seja, será uzada somente naquela função
 * 
 * const - Tem por objetivo criar um espaço de memória para armagenar dados que 
 * não sofrem mudança
*/

//Função de CallBack para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome) {
    // Variavel local para receber o nome do aluno, que vai ser retornado pela função
    let nomeAluno = nome


    // Função de CallBack Para entrada da nota1
    entradaDados.question('Digite a nota 1: \n', function (nota1) {

        let primeiraNota = nota1
        // OU   let primeiraNota = parseFloat(nota1)
        // OU   let primeiraNota = number.parseFloat(nota4)



        entradaDados.question('Digite a nota 2: \n', function (nota2) {

            let segundaNota = nota2
            // OU   let segundaNota = parseFloat(nota2)


            entradaDados.question('Digite a nota 3: \n', function (nota3) {

                let terceiraNota = nota3
                // OU   let terceiraNota = parseFloat(nota3)


                entradaDados.question('Digite a nota 4: \n', function (nota4) {

                    let quartaNota = nota4
                    // OU   let quartaNota = parseFloat(nota4)

                    //console.log(nomeAluno,primeiraNota,segundaNota,terceiraNota,quartaNota)
                    let media = 0

                    /*
                        *Conversão de dados String para numero
                        * parseInt() - Converte para inteiro
                        *
                        * parseFloat() - Converte para Double
                        * Ou Number.parseint() Number.parseFloat()
                        *
                        * Ou Number() - Converte a String para int ou double deacordo com a entrada de dados
                        * 
                        * 
                        * Operadores de comparação
                        *  == (Verificar a igualdade)
                        *  != (Verifica a diferença)
                        *  < (Verificar o menor valor)
                        *  >(Verificar o maior valor)
                        *  <= (Verificar o menor e igual valor)
                        *  >= (Verificar o maior e iqual)
                        * === (Verifica a igualdade de conteudo e verifica a tipagem)
                        * 
                        * Ex: 0 == 0    V
                        *     0 == "0"  V
                        *     0 === "0" F
                        *     0 ==! 0.0 F  O conteuso é igual mas a tipagem é diferente
                        * 
                        * Operadores lógicos
                        * OU     ||     pipe
                        * E      &&     And
                        * Negação ! Not
                     */

                    //Estrutura condicional
                    //validação para tratar entradas vazias
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('Erro: É nessesario digitar algum valor nas entradas')
                    } else if(isNaN(primeiraNota) || isNaN(segundaNota || isNaN(terceiraNota) || isNaN(quartaNota))){

                        console.log('Erro: é nessesario que todos os dados sejam números')

                    }else if (primeiraNota >10 || primeiraNota<0 || segundaNota>10 || segundaNota<0 || terceiraNota>10 || terceiraNota<0 || quartaNota>10 || quartaNota<0){
                          
                        console.log('Digite uma valor entra 0 a 10')
                    }
                    else {

                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4
                        if(media >= 7){
                            console.log('Aluno Aprovado')
                            console.log(media)
                        }else{
                            console.log('Aluno Reprovado')
                        }
                       
                            
                    }
                })
            })
        })

    })
})