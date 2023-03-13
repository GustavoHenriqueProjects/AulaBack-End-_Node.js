/************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Gustavo Henrique
 * Data: 10/03/2023
 * Versão: 1.0
 ************************************************************************/

/**************************************************************************
 * Express - depedencia do Node, que permite a integração entre o protocolo
 * http com o código.
 *          npm install express --save
 *          
 * Cors - Gerenciador de permições para protocolo HTTP :
 *          npm install cors --save
 * 
 * Body-parser - É uma dependencia que permite manipular dados pelo Body da
 * requisição
 *          npm install body-parser --save
 * 
 **************************************************************************/

/**************************************************************************
 * Import das dependencias para criar a API
 * 
 * const express = require('express') : Responsavel pelas requisições
 * const cors = require('cors') : Responsavel pelas permições das requisições
 * const bodyParser = require('body-parser') : Responsavel pela manipulação
 *  do body da requisição
 **************************************************************************/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')

//Import do arquivo de funções
const estadosCidades = require('./modulo/estados_cidades.js')

//Cria um objeto com as informações da classe expless
const app = express()

app.use((request, response, next) => {
    /**
     * Permite gerenciar a origem das requisições da API
     * - Significa que a API será publica
     * IP - Se colocar o IP, a API somente responderá para aquela maquina
     */
    response.header('Access-Control-Allow-Origin', '*')

    /**
     * Permite gerenciar quais verbos (metodos) poderão fazer requisições
     * 
     */
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')

    //Ativa no cors das requisições as permições estabelecidas
    app.use(cors())

    next()
})

//EndPoints para Listar os estados
app.get('/estados', cors(), async function (request, response, next) {

    //Chama a função que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados()

    //Tratamento para validar se a função reaçizou o processamento
    if (listaDeEstados) {
        //Retorna o Json e o Status code
        response.json(listaDeEstados)
        response.status(200)
    } else {
        response.status(500)
    }

})

//EndPoint: Lista as caracteristicas do estado pela sigla.
app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {
    /*Para criar uma variavel dentro da URL: '/estado:uf'
    uf- É uma variavel que será utilizada para passagem de valores, na URL da requisição*/

    //Recebe o valor da variavel uf, que sera encaminhado na URL da Requisição
    let siglaEstado = request.params.uf

    let statusCode
    let dadosEstado = {}

    //Tratamento para validar os valores encaminhados no parametro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        //response.status(400)
        //statusCode = 400
        statusCode = 400
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caraceres (2 digitos)"
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        //Valida se ouve estado válido da função
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
            dadosEstado.message = "Erro 404"
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)
})

//EndPoint: Mostra as informações referentes a capital de um estado do Brasil
app.get('/estado/capital/:uf', cors(), async function (request, response, next) {
    //Recebe o valor da variavel uf, que sera encaminhado na URL da Requisição
    let siglaEstado = request.params.uf
    let statusCode
    let dadosCapital = {}

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCapital.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caraceres (2 digitos)"
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaEstado)
        if (capital) {
            statusCode = 200
            dadosCapital = capital
        } else {
            statusCode = 404
            dadosCapital.message = "Erro 404"
        }
    }

    response.status(statusCode)
    response.json(dadosCapital)

})

//EndPoint: Retorna as informações referentes aos estados do Brasil, conforme a região
app.get('/estados/regiao/:regiao', cors(), async function (request, response, next) {
    //Recebe o valor da variavel uf, que sera encaminhado na URL da Requisição
    let regiaoEstado = request.params.regiao
    let statusCode
    let dadosCapital = {}

    if (regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)) {
        statusCode = 400
        dadosCapital.message = "Não é possivel processar a requisição, verifique novamente a regiao"
    } else {
        let regiao = estadosCidades.getEstadosRegiao(regiaoEstado)
        if (regiao) {
            statusCode = 200
            dadosCapital = regiao
            console.log(regiao)
        } else {
            statusCode = 404
            dadosCapital.message = "Erro 404"
            console.log(regiao)
        }
    }

    response.status(statusCode)
    response.json(dadosCapital)
})

//EndPoint: Retorna as informações das capitais do país
app.get('/capitais/pais', cors() , async function (request, response, next) {

    let statusCode
    let dadosCapitaisDoPais = {}
    let capitaisPais = estadosCidades.getCapitalPais()

    statusCode = 200
    dadosCapitaisDoPais = capitaisPais
    response.status(statusCode)
    response.json(dadosCapitaisDoPais)

})

//EndPoint: Retorna uma lista de cidades de acordo com a sigla do estado
app.get('/cidades/:sigla', cors() , async function (request,response,next) {
    let statusCode
    let siglaEstado = request.params.sigla
    let listaCidades = {}

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 ||!isNaN(siglaEstado)){
        statusCode = 400
        listaCidades.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caraceres (2 digitos)"
    }else{
        let cidades = estadosCidades.getCidades(siglaEstado)
        if(cidades){
            statusCode = 200
            listaCidades = cidades
        }else{
            statusCode = 404
            listaCidades.message = "Erro 404"
        }
    }
      response.status(statusCode)
      response.json(listaCidades)
})

//Permite carregar os Endpoints ciados e aguardar as requisições pelo
//protocolo HTTP na porta 8080
app.listen(8080, function () {
    console.log('Servidor Aguardando requisições na porta 8080.')
}) 