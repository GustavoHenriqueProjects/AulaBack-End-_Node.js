/***************************************************************
 * Objetivo: Implementa a regra de negocio entro o app e a model
 * Data: 24/04/2023
 * Versão: 1.0 
 ***************************************************************/

//Import do arquivo de acesso ao banco de dados
const alunoDAO = require('../model/dao/alunoDAO.js')

//Função para receber os dados do APP e enviar para a Model para inserir um novo item
//Essa função recebe um Json dos dados do aluno
const inserirAluno = async function(dadosAluno){

    //Import do arquivo global de configurações do projeto
    let message = require('./modulo/config.js')
    
    if(
        dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf             > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg              > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined
    ){
       return message.ERRO_REQUIRED_DATA
    }else{
        //Envia os dados para a modem a serem inseridos no banco de dados
        let status = await alunoDAO.insertAluno(dadosAluno)
        if(status){
          return message.CREATED_ITEM  
        }else{
            return message.ERRO_INTERNAL_SERVER
        }
    }
}

//Função para recever os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

}

//Função para excluir um ano excluido pelo id, sera encaminhado pela model
const deletarAluno = function(id){

}

//Função para retornar todos os items da tabela recebidos da mode
const selecionarTodosAlunos = async function(){

    //Solicita ao DAO todos os alunos do banco de dados
    let dadosAluno = await alunoDAO.selectAllAluno()
    
    //Cria um objeto do tipo Json
    let dadosJson = {}

    //Valida se o banco de dados teve registro
    if(dadosAluno){
        //Adiciona o array do banco de dados no dadosJson
        dadosJson.alunos = dadosAluno
        return dadosJson
    }else{
        return false
    }
}

//Função para buscar um item iltrando pelo id, sera encaminhado  pela model
const buscarIdAluno = function(id){

}

module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno
}