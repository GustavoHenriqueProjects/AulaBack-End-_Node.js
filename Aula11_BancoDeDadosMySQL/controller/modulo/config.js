/********************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis , constantes e funçõs globais
 * do projeto Banco.
 * Data: 28/04/2023
 * Versão; 1.0
 **********************************************************************************/

/***************************** Constante de ERROS *********************************/
const ERRO_REQUIRED_DATA = {status: 400, message: 'Preencha todos os campos!'}  
const ERRO_INTERNAL_SERVER= {status: 500, message: 'ERRO Inerno no servidor banco de dados'}  
const ERRO_REQUIRED_ID = {status: 400, message: 'O atributo id é obrigatorio na requisição'}  
const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de midia content type da solicitação não é compativo com o servidor, [application/json]'}
const ERROR_NOT_FOUND= {status: 404, message: 'Nenhum registro encontrado na requisição.'}
const ERROR_INVALID_NAME= {status: 400, message: 'O atributo nome se encontra vazio ou foi informado de forma incorreta.'}

/***************************** Constante de SUCESSOS ******************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso'}
const UPDATED_ITEM = {status: 201, message: 'Registro atualiazado com sucesso'}

module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_INTERNAL_SERVER,
    CREATED_ITEM,
    ERRO_REQUIRED_ID,
    UPDATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_NOT_FOUND,
    ERROR_INVALID_NAME
}
