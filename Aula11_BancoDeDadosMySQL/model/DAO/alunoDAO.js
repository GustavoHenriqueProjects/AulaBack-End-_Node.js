/***************************************************************
 * Objetivo: Realizar a interação do aluno com o Banco de Dados.
 * Data: 14/04/2023
 * Versão: 1.0 
 ***************************************************************/


//Função para inserir um novo registro no Banco de Dados
const insertAluno = function(dadosAluno) {


}

//Função para atualizar um registro existente no Banco de Dados
const updateAluno = function(dadosAluno) {


}

//Função para excluir um registro no Banco de Dados
const deleteAluno = function(dadosAluno) {


}

//Função para retorna todos os registros no Banco de Dados
const selectAllAluno = async function() {
    //Import da biblioteca do prisma client (Responsavel por manipular dados no banco de dados)
    let {PrismaClient} = require("@prisma/client")

    //INstancia da classe do PrismaClient
    let prisma = new PrismaClient()

    //Variavel com script sql para executar no banco de dados 
    let sql = 'select * from tbl_aluno'

    //Executa o script sql no banco de dados
    //$queryRawUnSafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utilizado quando passar o script direto no método(Ex: $queryRaw('select * from tbl_))
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Verifica se o banco de dados encontro algum registro
    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }



}

//Função para retorna o registro do aluno filtrado pelo ID no Banco de Dados.
const selectByIdAluno = function(id) {


}

module.exports = {
    selectAllAluno
}