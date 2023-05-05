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

//Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
const bodyJson = bodyParse.json()

const controllerAluno = require('./controller/controller_aluno.js')
const message = require('./controller/controller_aluno.js')

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
    
    //Solicita ao controller que retorna todos os alunos do banco de dados
    let dados = await controllerAluno.selecionarTodosAlunos()
    console.log(dados)

    if(dados){
        response.json(dados)
        response.status(200)
    }else{
        response.json()
        response.status(404)
    }
})

//CRUD (Create, Read, Update e Delete)

/*********************************************************************************
 * EndPoints: Responsavel pelos Alunos
 * 
 *  EndPoint: Retorna dados do aluno pelo ID
 *  Chave primaria ID é passada por parametro questão de segurnça. Query nâo é
 *  recomentado
 **********************************************************************************/
app.get('/v1/lion-school/aluno/1', cors(), async function(request, response) {


})

//EndPoint: Inseri um novo aluno.
app.post('/v1/lion-school/aluno', cors(),bodyJson, async function(request, response) {
    
    let contentType = request.headers['content-type']

    if(String.toLowerCase(contentType) == 'application/json'){
    //Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body

    //Envia os dados para a controller
    let resultInsetDados = await controllerAluno.inserirAluno(dadosBody)

    //Retorna o status code e a message
    response.status(resultInsetDados.status)
    response.json(resultInsetDados)
    }else{

    response.status(message.status)
    response.json(message.message)

    }
    

})

//EndPoint: Atualiza um dado do aluno pelo ID.
app.put('/v1/lion-school/aluno/:id', cors(),bodyJson, async function(request, response) {
    //Recebe os dados do body
    let dadosBody = request.body

    //Recebe o id do aluno
    let idAluno = request.params.id

    let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody, idAluno)

    response.status(resultUpdateDados.status)
    response.json(resultUpdateDados)

})

//EndPoint: Exclui o aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

    let idAluno = request.params.id 

    let status = await controllerAluno.deletarAluno(idAluno)

    response.status(status.status)
    response.json(status.message)

})

app.listen(8080, function(){
    console.log("Servidor aguardando requisições na porta 8080")
})