/**************************************************************************
 * Objetivo: API para interagir com o banco de dados(GET,POST, DELETE,PUT)
 * Data: 14/04/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 **************************************************************************/

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
 * Para relizar a conecção com o banco de dados iremos tilizar o Prisma
 *      npm install prisma --save
 *      npx prisma
 *      npx prisma init
 *      npm install @prisma/client 
 **************************************************************************/

// Import das bibliotecas
const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const { request, response } = require('express')

//Cria o objeto app utilizando a classe do express
const app = express()

//Configura as permições do cors
app.use((request, response, next) => {
    //Permições de origim de requisições
    response.header('Access-Control-Allow-Origin', '*')

    //Permições de metodos que serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET,POST, PUT,DELETE,OPTIONS')

    //Define as permições para o cors
    app.use(cors())

    //Continua para a leitura dos EndPoints
    next()
})

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

})

//CRUD (Create, Read, Update e Delete)

/*********************************************************************************
 * EndPoints: Responsavel pelos Alunos
 * 
 *  EndPoint: Retorna dados do aluno pelo ID
 *  Chave primaria ID é passada por parametro questão de segurnça. Query nâo é
 *  recomentado
 **********************************************************************************/
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Inseri um novo aluno.
app.post('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Atualiza um dado do aluno pelo ID.
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Exclui o aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})