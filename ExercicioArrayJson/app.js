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

//Cria um objeto com as informações da classe expless
const app = express()

app.use((request,response,next) =>{
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
    response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')

    //Ativa no cors das requisições as permições estabelecidas
    app.use(cors())

    next()
})

 //endPoints para Listar os estados
 app.get('/estados',cors(),async function(request,response,next){
        
        const estadosCidades = require('./modulo/estados_cidades.js')
        let listaDeEstados = estadosCidades.getListaDeEstados()

        response.json(listaDeEstados)
        response.status(200)
 })
 
//Permite caarregar os Endpoints ciados e aguardar as requisições pelo
//protocolo HTTP na porta 8080
 app.listen(8080, function(){
     console.log('Servidor Aguardando requisições na porta 8080.')
 }) 