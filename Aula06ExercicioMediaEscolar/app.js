/**
 * Objetivo: Realizar o desenvolvimento de um sistema back-end que gerencie as médias escolares.
 * Data: 03/02/2023
 * Autor: Gustavo Henrique
 * Versão 1.0
 */

//Importando classe avaliaçãoMedias 
var avaliacaoMedias = require('./modulo/avaliacaoMedias')

//Importe da biblioteca para entrada de dados
var readline = require('readline')

//Criando objeto para receber os dados via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Nome do aluno: \n', function ($nomeAluno) {
    let nomeAluno = $nomeAluno

    entradaDeDados.question('Sexo do aluno(a): \n', function ($sexoAluno) {
        let sexoAluno = $sexoAluno

        entradaDeDados.question('Nome do professor(a): \n', function ($nomeProfessor) {
            let nomeProfessor = $nomeProfessor


            entradaDeDados.question('Sexo do professor(a): \n', function ($sexoProfessor) {
                let sexoProfessor = $sexoProfessor

                entradaDeDados.question('Nome do curso: \n', function ($nomeCurso) {
                    let nomeCurso = $nomeCurso

                    entradaDeDados.question('Nome da disciplina: \n', function ($nomeDisciplina) {
                        let nomeDisciplina = $nomeDisciplina

                        entradaDeDados.question('Digite a primeira nota: \n', function ($primeiraNota) {
                            let primeiraNota = $primeiraNota

                            entradaDeDados.question('Digite a segunda nota: \n', function ($segundaNota) {
                                let segundaNota = $segundaNota

                                entradaDeDados.question('Digite a terceira nota: \n', function ($terceiraNota) {
                                    let terceiraNota = $terceiraNota

                                    entradaDeDados.question('Digite a quarta nota: \n', function ($quartaNota) {
                                        let quartaNota = $quartaNota

                                        //Validação de entrada de dados vazia
                                        if (nomeAluno == '' || sexoAluno == '' || nomeProfessor == '' || sexoProfessor == '' ||
                                            nomeCurso == '' || nomeDisciplina == '' || primeiraNota == '' || segundaNota == '' ||
                                            terceiraNota == '' || quartaNota == '') {

                                            console.log('Atenção: Preencha todos os campos.')
                                            entradaDeDados.close()

                                            //Verifica se a numero nos textos
                                        } else if (!isNaN(nomeAluno) || !isNaN(sexoAluno) ||
                                                    !isNaN(nomeProfessor) || !isNaN(sexoProfessor))
                                         {

                                            console.log('Não digite número nos campos de texto')
                                            entradaDeDados.close()

                                        }else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {

                                            console.log('Atenção: Preencha as notas com número.')
                                        }else{

                                            let validacao

                                            validacao = avaliacaoMedias.validacaoNotas(primeiraNota,segundaNota,terceiraNota,quartaNota)
                                            console.log('AAA'+validacao)

                                            if(validacao === false){

                                                entradaDeDados.question('Digite a nota do exame : \n', function ($notaExame) {
                                                    let notaExame = $notaExame

                                                    console.log('A nota do exame é')

                                                })

                                            }
                                        }

                                    })

                                })

                            })

                        })

                    })

                })
            })

        })

    })

})