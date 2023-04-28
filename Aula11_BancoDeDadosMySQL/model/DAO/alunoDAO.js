/***************************************************************
 * Objetivo: Realizar a interação do aluno com o Banco de Dados.
 * Data: 14/04/2023
 * Versão: 1.0 
 ***************************************************************/
//Import da biblioteca do prisma client (Responsavel por manipular dados no banco de dados)
const {PrismaClient} = require("@prisma/client")

//Instancia da classe do PrismaClient
const prisma = new PrismaClient()

//Função para inserir um novo registro no Banco de Dados
const insertAluno = async function(dadosAluno) {

    //Script SQL para inserir um novo dado no banco de dados
    let sql = `insert into tbl_aluno (
                                        nome,
                                        cpf,
                                        rg,
                                        data_nascimento,
                                        email)
                                        values(
                                             '${dadosAluno.nome}',
                                             '${dadosAluno.cpf}',
                                             '${dadosAluno.rg}',
                                             '${dadosAluno.data_nascimento}',
                                             '${dadosAluno.email}'
                                            )`

    // Insert, update ou delet se utiliza o $Execute se for esperar retorno de dados $Query
    //Excuta o script no banco de dados e retorna se deu certo ou nao o insert aluno
    let result = await prisma.$executeRawUnsafe(sql)
    if(result){
        return true
    }else{
        return false
    }

}

//Função para atualizar um registro existente no Banco de Dados
const updateAluno = function(dadosAluno) {


}

//Função para excluir um registro no Banco de Dados
const deleteAluno = function(dadosAluno) {


}

//Função para retorna todos os registros no Banco de Dados
const selectAllAluno = async function() {
    
    //Variavel com script sql para executar no banco de dados 
    //Ela seleciona todas as informações da tabela
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
    selectAllAluno,
    insertAluno,
    updateAluno,
    deleteAluno,
    selectByIdAluno
}