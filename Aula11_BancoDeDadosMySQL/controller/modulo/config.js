/********************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis , constantes e funçõs globais
 * do projeto Banco.
 * Data: 28/04/2023
 * Versão; 1.0
 **********************************************************************************/

/***************************** Constante de ERROS *********************************/
const ERRO_REQUIRED_DATA = {status: 400, message: 'Preencha todos os campos!'}  
const ERRO_INTERNAL_SERVER= {status: 400, message: 'ERRO Inerno no servidor banco de dados'}  

/***************************** Constante de SUCESSOS ******************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso'}

module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_INTERNAL_SERVER,
    CREATED_ITEM
}
