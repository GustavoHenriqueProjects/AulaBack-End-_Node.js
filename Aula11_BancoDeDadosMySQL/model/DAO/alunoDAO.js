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

    //$queryRawUnSafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utilizado quando passar o script direto no método(Ex: $queryRaw('select * from tbl_))

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
const updateAluno = async function(dadosAluno) {
    let sql = `update tbl_aluno set 
                    nome = '${dadosAluno.nome}',
                    cpf = '${dadosAluno.cpf}' ,
                    rg = '${dadosAluno.rg}',
                    data_nascimento = '${dadosAluno.data_nascimento}',
                    email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}`

    //Executa o script no banco de dados
    let result = await prisma.$executeRawUnsafe(sql)

    if(result){
        return true
    }else{
        return false
    }
}

//Função para excluir um registro no Banco de Dados
const deleteAluno = async function(idAluno) {

    let sql = `delete from tbl_aluno where id=${idAluno}`

    let result = await prisma.$executeRawUnsafe(sql)

    if(result){
        return true 
    }else{
        return false
    }

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
const selectByIdAluno = async function(id) {
     //Variavel com script sql para executar no banco de dados 
    //Ela seleciona todas as informações da tabela
    let sql = `select * from tbl_aluno where id = ${id}`

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

const selectLastId = async function(){

    //Script para retorna apenas o ultimo registro inserido na tabela
    let sql = 'select id from tbl_aluno order by id desc limit 1'

    let rsAluno = await prisma.$executeRawUnsafe(sql)
    
    if(rsAluno.length > 0){
        return rsAluno[0].id
    }else{
        return false
    }
}

const getAlunoPorNome = async function(nome){
     //$queryRawUnSafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utilizado quando passar o script direto no método(Ex: $queryRaw('select * from tbl_))

    //LIKE é usado para fazer comparação de Strings
    let sql = `select * from tbl_aluno where nome like '%${nome}%'`
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Verifica se array contem pelo menos uma linha
    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }
}

module.exports = {
    selectAllAluno,
    insertAluno,
    updateAluno,
    deleteAluno,
    selectByIdAluno,
    updateAluno,
    selectLastId,
    getAlunoPorNome
}