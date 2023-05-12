/***************************************************************
 * Objetivo: Implementa a regra de negocio entro o app e a model
 * Data: 24/04/2023
 * Versão: 1.0 
 ***************************************************************/

//Import do arquivo de acesso ao banco de dados
const alunoDAO = require('../model/dao/alunoDAO.js')

//Import do arquivo global de configurações do projeto
const message = require('./modulo/config.js')

//Função para receber os dados do APP e enviar para a Model para inserir um novo item
//Essa função recebe um Json dos dados do aluno
const inserirAluno = async function(dadosAluno){

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
          let dadosJSON = {}
          let alunoNovoId = await alunoDAO.selectLastId()
          dadosAluno.id = alunoNovoId

          dadosJSON.status = message.CREATED_ITEM.status
          dadosJSON.aluno = dadosAluno

          return dadosJSON  
        }else{
            return message.ERRO_INTERNAL_SERVER
        }
    }
}

//Função para recever os dados do APP e enviar para a Model para atualizar um item existente
const atualizarAluno = async function(dadosAluno, idAluno){

    if(
        dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf             > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg              > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined
    ){
       return message.ERRO_REQUIRED_DATA
       //Validação para o ID
    }else if(idAluno == '' || idAluno== undefined || isNaN(idAluno) ){
        return message.ERRO_REQUIRED_ID
    }else{
        //Adiciona o ID no json com todos os dados
        dadosAluno.id = idAluno

        //Encaminha para DAO os dados para serem alterados no banco
        let status = await alunoDAO.updateAluno(dadosAluno)

        if(status){
            return message.UPDATED_ITEM
        }else{
            return message.ERRO_INTERNAL_SERVER
        }
    }
}

//Função para excluir um ano excluido pelo id, sera encaminhado pela model
const deletarAluno = async function(idAluno){

    if(idAluno == '' || idAluno == undefined || isNaN(idAluno) ){
        return message.ERRO_REQUIRED_ID
    }else{

        let status = await alunoDAO.deleteAluno(idAluno) 

        if(status){
            return message.UPDATED_ITEM
        }else{
            return message.ERRO_INTERNAL_SERVER
        }
    }
}

//Função para retornar todos os items da tabela recebidos da mode
const selecionarTodosAlunos = async function(){

    //Solicita ao DAO todos os alunos do banco de dados
    let dadosAluno = await alunoDAO.selectAllAluno()
    
    //Cria um objeto do tipo Json
    let dadosJson = {}

    //Valida se o banco de dados teve registro
    if(dadosAluno){
        dadosJson.status = 200
        dadosJson.count = dadosAluno.length
        //Adiciona o array do banco de dados no dadosJson
        dadosJson.alunos = dadosAluno
        return dadosJson
    }else{
        return message.ERROR_NOT_FOUND
    }
}

//Função para buscar um item iltrando pelo id, sera encaminhado  pela model
const buscarIdAluno = async function(id){

    //Validação para ID
    if(id == '' || id == undefined || isNaN(id)){
        return message.ERRO_REQUIRED_ID
    }else{
         //Solicita ao DAO todos os alunos do banco de dados
      let dadosAluno = await alunoDAO.selectByIdAluno(id)
    
      //Cria um objeto do tipo Json
      let dadosJson = {}
  
      //Valida se o banco de dados teve registro
      if(dadosAluno){
          dadosJson.status = 200
          //Adiciona o array do banco de dados no dadosJson
          dadosJson.alunos = dadosAluno
          return dadosJson
      }else{
          return message.ERROR_NOT_FOUND
      }
    }
}

module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno
}