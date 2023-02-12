/************************************************************************
 * Objetivo: Arquivo de validação de informações e validação da notas.
 * Data: 03/02/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 **********************************************************************/

// Criando função reponsavel por executa a validacao de notas.
var resultadoAprovado
var resultadoNotas
var mediaFinalExame
var validacaoDeNotas 

const validacaoNotas = function ($nota1, $nota2, $nota3, $nota4) {

    let primeiraNota = Number($nota1)
    let segundaNota = Number($nota2)
    let terceiraNota = Number($nota3)
    let quartaNota = Number($nota4)

    let status = true

    if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 ||
        segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 ||
        quartaNota < 0 || quartaNota > 100) {

        //Alguma nota esta acima ou abaixo de 100
        validacaoDeNotas = 'NotasNoFormatoErrado'
        console.log('Atenção: Os valores digitados devem estar obrigatóriamente entre 0 e 100')

        if (validacaoDeNotas == 'NotasNoFormatoErrado') {
           
            return validacaoDeNotas
        } 

    } else {

        resultadoNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4

        if (resultadoNotas >= 70) {

            resultadoAprovado = 'Aprovado(a)'

        } else if (resultadoNotas < 50) {

            resultadoAprovado = 'Reprovado(a)'

        } else if (resultadoNotas >= 50 || resultadoNotas <= 69) {

            status = false

        }

        //Valida se a nota digitada é maior que 100 ou menor que 0
         if (resultadoAprovado == 'Reprovado(a)') {
            return resultadoAprovado
        } else if (status == false) {
            return status
        } else {
            return status
        }

    }

}


//Função que define se o aluno(a) de recuperação esra reprovado ou não
const avalicaoExameRecuperacao = function ($notaExame) {

    let notaExame = Number($notaExame)
    mediaFinalExame = (notaExame + Number(resultadoNotas)) / 2

    if (notaExame > 60) {
        resultadoAprovado = 'Aprovado(a)'
    } else {
        resultadoAprovado = 'Reprovado(a)'
    }

}

//Função que define o relatorio do aluno aprovado nas primeira provas
const relatorioAluno = function ($nomeAluno, $sexoAluno, $nomeProfessor,
    $sexoProfessor, $disciplina, $curso, $primeiraNota,
    $segundaNota, $terceiraNota, $quartaNota) {

    let nomeAluno = $nomeAluno
    let sexoAluno = $sexoAluno
    let nomeProfessor = $nomeProfessor
    let sexoProfessor = $sexoProfessor
    let disciplina = $disciplina
    let curso = $curso
    let primeiraNota = $primeiraNota
    let segundaNota = $segundaNota
    let terceiraNota = $terceiraNota
    let quartaNota = $quartaNota

    let generoAluno
    let generoProfessor

    //Validando genero do aluno(a)
    if (sexoAluno == 'M') {
        generoAluno = 'O aluno'

    } else {
        generoAluno = 'A aluna'

    }

    //Validando genero do professor(a)
    if (sexoProfessor == 'M') {
        generoProfessor = 'Professor'

    } else {
        generoProfessor = 'Professora'
    }


    //console.log(`${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} .`)
    let printRelatorio = `\n    ${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} \n
    Curso: ${curso} \n
    ${generoProfessor}: ${nomeProfessor} \n
    Notas do Aluno(a) ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota} \n
    Média final: ${resultadoNotas} \n`

    return printRelatorio

}

//Função que define o relatorio do aluno reprovado nas primeiras provas sem recuperação
const relatorioAlunoReprovado = function ($nomeAluno, $sexoAluno, $nomeProfessor,
    $sexoProfessor, $disciplina, $curso, $primeiraNota,
    $segundaNota, $terceiraNota, $quartaNota) {

    let nomeAluno = $nomeAluno
    let sexoAluno = $sexoAluno
    let nomeProfessor = $nomeProfessor
    let sexoProfessor = $sexoProfessor
    let disciplina = $disciplina
    let curso = $curso
    let primeiraNota = $primeiraNota
    let segundaNota = $segundaNota
    let terceiraNota = $terceiraNota
    let quartaNota = $quartaNota

    let generoAluno
    let generoProfessor

    //Validando genero do aluno(a)
    if (sexoAluno == 'M') {
        generoAluno = 'O aluno'

    } else {
        generoAluno = 'A aluna'

    }

    //Validando genero do professor(a)
    if (sexoProfessor == 'M') {
        generoProfessor = 'Professor'

    } else {
        generoProfessor = 'Professora'
    }


    //console.log(`${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} .`)
    let printRelatorio = `\n    ${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} \n
    Curso: ${curso} \n
    ${generoProfessor}: ${nomeProfessor} \n
    Notas do Aluno(a) ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota} \n
    Média final: ${resultadoNotas} , ${generoAluno} está reprovado(a) \n`

    return printRelatorio

}



//Função que define o relatorio para o aluno em recuperação
const relatorioAlunoRecuperacao = function ($nomeAluno, $sexoAluno, $nomeProfessor,
    $sexoProfessor, $disciplina, $curso, $primeiraNota,
    $segundaNota, $terceiraNota, $quartaNota,$notaDoExame) {

    let nomeAluno = $nomeAluno
    let sexoAluno = $sexoAluno
    let nomeProfessor = $nomeProfessor
    let sexoProfessor = $sexoProfessor
    let disciplina = $disciplina
    let curso = $curso
    let primeiraNota = $primeiraNota
    let segundaNota = $segundaNota
    let terceiraNota = $terceiraNota
    let quartaNota = $quartaNota
    let notaDoExame = $notaDoExame
    let generoAluno
    let generoProfessor

    //Validando genero do aluno(a)
    if (sexoAluno == 'M') {
        generoAluno = 'O aluno'

    } else {
        generoAluno = 'A aluna'

    }

    //Validando genero do professor(a)
    if (sexoProfessor == 'M') {
        generoProfessor = 'Professor'

    } else {
        generoProfessor = 'Professora'
    }


    //console.log(`${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} .`)
    let printRelatorio = `\n    ${generoAluno} ${nomeAluno} foi ${resultadoAprovado} na disciplina ${disciplina} \n
    Curso: ${curso} \n
    ${generoProfessor} : ${nomeProfessor}\n
    Notas do Aluno(a) ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, Nota do exame: ${notaDoExame} \n
    Média final do Exame: ${mediaFinalExame} \n`

    return printRelatorio

}

module.exports = {
    validacaoNotas,
    avalicaoExameRecuperacao,
    relatorioAlunoRecuperacao,
    relatorioAluno,
    relatorioAlunoReprovado
}