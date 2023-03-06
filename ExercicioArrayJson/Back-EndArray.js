/************************************************************************************************************************
 * Objetivo: Realizar a programação de funções que serão usadas para consumir o Json, e retorna o valor para o front-end.
 * Autor: Gustavo Henrique
 * Data: 03/03/2023
 * Versão: 1.0
 * 
 ************************************************************************************************************************/
const estadosCidades = require('./estados_cidades.js')

const getListaDeEstados = function () {

    const listaEstadosJson = {}  //Arquivo Json para manipulação
    const listaEstadosArray = [] //Array
    let quantidadeEstados = 0
 
    estadosCidades.estados.forEach(function (listaEstados) {
 
       /**Adicionando cada estado a Array**/
       listaEstadosArray.push(listaEstados.sigla)
 
       quantidadeEstados++
    })
 
    /**Acionando a chave e colocando toda a estrutura da Array dentro**/
    listaEstadosJson.uf = listaEstadosArray
 
    listaEstadosJson.quantidade = quantidadeEstados
    return listaEstadosJson
 }
 
//console.log(getListaDeEstados())
 
 const getDadosEstado = function ($UF) {
 
    let uf = $UF
    let status = false
 
    const dadosEstadosJson = {}  //Arquivo Json para manipulação
 
    estadosCidades.estados.forEach(function (dadosEstado) {
 
 
       if (dadosEstado.sigla == uf) {
 
          dadosEstadosJson.uf = dadosEstado.sigla
          dadosEstadosJson.descricao = dadosEstado.nome
          dadosEstadosJson.capital = dadosEstado.capital
          dadosEstadosJson.regiao = dadosEstado.regiao
 
          status = true
 
       }
 
    })
 
    if (status) {
       return dadosEstadosJson
    } else {
       return status
    }
 }
 
//console.log(getDadosEstado('SP'))
 
 const getCapitalEstado = function ($UF) {
 
    let uf = $UF
    let status = false
 
    const capitalEstadoJson = {}  //Arquivo Json para manipulação
 
    estadosCidades.estados.forEach(function (dadosEstado) {
 
 
       if (dadosEstado.sigla == uf) {
 
          capitalEstadoJson.uf = dadosEstado.sigla
          capitalEstadoJson.descricao = dadosEstado.nome
          capitalEstadoJson.capital = dadosEstado.capital
 
          status = true
 
       }
 
    })
 
    if (status) {
       return capitalEstadoJson
    } else {
       return status
    }
 }
 
//console.log(getCapitalEstado('AC'))
 
 const getEstadosRegiao = function ($regiao) {
 
    let regiao = $regiao
    const regiaoJson = {}
    const regiaoArray = []
    let status = false
    estadosCidades.estados.forEach(function (regiaoSelecionada) {
 
       if (regiao == regiaoSelecionada.regiao) {
 
          //Cria um novo objeto a cada loop {} e instancia com novas informações
          const regiaoEstadosJson = {}
 
          regiaoEstadosJson.uf = regiaoSelecionada.sigla
          regiaoEstadosJson.descricao = regiaoSelecionada.nome
          regiaoArray.push(regiaoEstadosJson)
          status = true
 
       }
    })
 
    if (status) {
       regiaoJson.regiao = regiao
       regiaoJson.estados = regiaoArray
       return regiaoJson
 
    } else {
       return status
    }
 }
 
//console.log(getEstadosRegiao('Sul'))
 
 const getCapitalPais = function(){
 
    const json = {}
    const listaCapitalArray = []
 
    estadosCidades.estados.forEach(function(capitais){
       
       //Não sobrepoe as informações poeque a cada loop crio uma nova instancia
       const listaCapitalJson = {}
 
       if(capitais.capital_pais != undefined){
          
         listaCapitalJson.capital_atual =  capitais.capital_pais.capital 
         listaCapitalJson.uf = capitais.sigla
         listaCapitalJson.descricao = capitais.nome
         listaCapitalJson.capital = capitais.capital
         listaCapitalJson.regiao = capitais.regiao
         listaCapitalJson.capital_pais_ano_inicio = capitais.capital_pais.ano_inicio
         listaCapitalJson.capital_pais_ano_termino = capitais.capital_pais.ano_fim
         listaCapitalArray.push(listaCapitalJson)
        
       }
 
    })
 
  
    json.capitais = listaCapitalArray
    
    return json
 
 }
 
//console.log(getCapitalPais())
 
  const getCidades = function($listaCidades){
 
    let listaCidades = $listaCidades
    const listaCidadesJson = {}
    const arrayCidades = []
    let quantidadeCidades = 0
    let status = false
 
    estadosCidades.estados.forEach(function(informacoesCidade){
        
       if(listaCidades == informacoesCidade.sigla){
          listaCidadesJson.uf = informacoesCidade.sigla
          listaCidadesJson.descricao = informacoesCidade.nome
          status = true
          
          informacoesCidade.cidades.forEach(function(cidades){
             //Cada cidade é direcionada para o Array
             arrayCidades.push(cidades.nome)
             quantidadeCidades++
          })
          
       }
    })
 
    listaCidadesJson.quantidade_cidade = quantidadeCidades
    listaCidadesJson.cidade = arrayCidades
 
    if(status){
    return listaCidadesJson
    }else{
       return status
    }
 
    
 
  }
 
//console.log(getCidades('AC'))