/***************************************************************
 * Objetivo: Implementa a regra de negocio entro o app e a model
 * Data: 24/04/2023
 * Versão: 1.0 
 ***************************************************************/

//Função para recever os dados do APP e enviar para a Model para inserir um novo item
const inserirAluno = function(dadosAluno){

}

//Função para recever os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

}

//Função para excluir um ano excluido pelo id, sera encaminhado pela model
const deletarAluno = function(id){

}

//Função para retornar todos os items da tabela recebidos da mode
const selecionarTodosAlunos = async function(){
    //Import do arquivo de acesso ao banco de dados
    let alunoDAO = require('../model/dao/alunoDAO.js')

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
    selecionarTodosAlunos
}