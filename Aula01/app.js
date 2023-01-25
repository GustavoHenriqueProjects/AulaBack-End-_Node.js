// Comentário em linha

/*
  Comentário em bloco
*/

//Permite escrever uma mensagem no terminal
console.log('Testando node.JS')

// require é para importa uma biblioteca que trata a entrada de dados pelo usuario
var readline = require('readline')

//Cria um objeto entradaDados com as referencias do readline 
//Essa variavel recebe o retorno de uma função
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

/*
    Função de call back é uma função que quando chamada retorna o seu conteudo em uma unica instrução;
    ou seja em apenas um passo de programação

    O objeto entradaDados aguarda a digitação do usuario, após a digitação do conteúdo é acionado um call back para encaminhar os dados
    para o console .log esse conteudo foi encaminhado atraves do parametro nome da função

*/

//Criamos uma função de callback para receber os dados digitados pelo usuario
//Função de callback  eu chamo e me retorna uma informação procesada
// A variavel nome recebe a resposta
entradaDados.question("Digite seu nome: \n", function(nome){

    console.log("Bem Vindo, "+nome+' ao servidor node.JS')

})