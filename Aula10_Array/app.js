/*************************************************************
 * Objetivo: Aprender a usar Array.
 * Data: 24/02/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 * ******************************************************** */

// [] - Significa que estamos manipulando uma Array de dados.
// { } - significa que estamos manipulando um formato JSON de dados.

/**********************************************************
 * Forma ERRADA de manipular conjunto de dados
 *  const nome1 = "José";
 *  const nom2 = "Maria";
 *  const nome3 = "Luiz";
 *  const nome4 = "Carlos"
 **********************************************************/

// INDICES:             0      1       2      3       4
const listaNomes = ['José', 'Maria', 'Luiz', 'Carlos', 10]
//TAMANHO: 5 posições

const listaProdutos = ['Teclado', 'Mouse', 'Monitor',
    'Computador', 'Fone', 'Impressora',
    'Scanner', 'WebCam']

//Manipulando um arquivo JSON
const listaProdutosJSON = {}

/*********************************************************************************
 * Exemplo de um JSON com estrutura de array: 
 * 
 *      produtos = {
 * 
 *                   [
 *                       {nome: "Teclado",  cor:"Preto", quantidade: 50},
 *                       {nome: "Monitor",  cor:"Branco", quantidade: 30},
 *                       {nome: "Mouse",  cor:"Preto", quantidade: 200}
 *            
 *                   ]
 * 
 *          } 
 * 
 * 
 ********************************************************************************/


const manipulandoElementos = function () {
    //Tipos de console

    //Verifica o tipo de dado
    console.log(typeof (listaNomes))

    //Mostra todos os elementos da Array
    console.log(listaNomes)

    //Mostra o tipo de dado que esta no índice 4
    console.log(typeof (listaNomes[4]))

    //Mostra o elemento no indice 0
    console.log(listaNomes[0])

    console.log('Nomedo USUARIO é: ' + listaNomes[3])
    console.log(`Nomedo USUARIO é: ${listaNomes[2]}`)

    //lenght - Permite contar quantos elementos tem em um Array.
    console.log(`A quantidade de itens do meu Array é: ${listaNomes.length}`)

    //Percorrendo Array usando While
    console.log('Percorrendo dados com While')
    let cont = 0; //START
    let qtdeItens = listaNomes.length //STOP

    while (cont < qtdeItens) {

        console.log(`Nome: ${listaNomes[cont]}`)
        cont++

    }

    //Percorrendo Array usando For
    console.log('Percorrendo Array usando For: ')
    qtdeNomes = listaNomes.length
    for (let cont = 0; cont < qtdeNomes; cont++) {
        console.log(`Nome: ${listaNomes[cont]}`)
    }

    //Percorrendo Array com ForEach
    console.log('Percorrendo Array usando FOREACH: ')
    //É um metoodo de um objeto Array que retorna uma função 
    //Todo o indice listaNomes é percorrido, e a informação é passada para a variavel nome.
    listaNomes.forEach(function (nome) {
        console.log(`Nome: ${nome}`)
    })

    //Adicionando elementos novos no Array
    //Push adiciona elementos no final do Array
    listaNomes.push('Alexandre')
    console.log(listaNomes)

    //unshift - Adiciona o elemento no inicio do Array
    // (E muda a posição de todos os proximos elementos)
    listaNomes.unshift('Fernanda Maria')
    console.log(listaNomes)

    //pop remove o ultimo elemento dentro da Array
    listaNomes.pop()
    console.log(listaNomes)

    //shift - Remove o primeiro elemento da Array 
    //(Reorganiza todos os próximo elementos)
    listaNomes.shift()
    console.log(listaNomes)
}

const filtrandoElemetos = function () {
    //indexof - Permite buscar elementos dentro do Array
    //Se o retorno for -1 (Não encontro o item)
    //Se o retorno for maior ou igual a 0 (Item encontrado)
    console.log(listaProdutos.indexOf('Fone'))

    if (listaProdutos.indexOf('Fone') >= 0) {
        console.log('O item pesquisado foi encontrado.')
    } else {
        console.log('Item não encontrado.')
    }

    //slice - permite criar um cópia do Array
    //const novosProdutos = listaProdutos.slice(0,3)
    const novosProdutos = listaProdutos.slice(0, 3)
    console.log(listaProdutos);
    console.log(novosProdutos)

}


const removerElemento = function (array, nomeItem) {
    //Cria uma cópia da Array
    let novaLista = array.slice()

    let nome = nomeItem

    //Remove o item selecionado da nova lista
    let indice = novaLista.indexOf(nome)
    let status

    //  splice - permite remover elementos do Array pelo indice
    //  Não esquecer de passar a quantidade de itens a ser removida
    if (indice >= 0) {
        novaLista.splice(indice, 1) //Remover apenas aquele indice
        status = true
    } else {
        status = false
    }

    if (status) {
        return novaLista
    } else {
        return status
    }

}
//console.log(removerElemento(listaProdutos,'Mouse'))
//console.log(listaProdutos)


//Funcao para trabalhar com objeto JSON produtos
const listagemProdutos = function () {

    let listProdutosJSON = {}

    let listProdutos = [

        { nome: 'Teclado', valor: 200, quantidade: 50 }, // indice 0
        { nome: 'Monitor DEL', valor: 1000, quantidade: 10 },//indice 1
        { nome: 'Mouse DEL', valor: 100, quantidade: 350 },//indice 2
    ]

    let listCores = ['Branco', 'Preto', 'Cinza']
    let listTipoTeclado = ['Mecânico', 'Semi-Mecânico', 'Menbrana']
    let listTipoMonitor = ['LCD', 'Full-HD', '4K', 'OLED']

    //Adicina chaves (opeções) no teclado
    listProdutos[0].cores = listCores
    listProdutos[0].tipo = listTipoTeclado

    //Adiciona chaves (opeções no monitor)
    listProdutos[1].cores = listCores
    listProdutos[1].tipo = listTipoMonitor

    //Adiciona chaves (opeções) no Mouse
    listProdutos[2].cores = listCores

    /**
     * Adicina uma chave produtos e coloca toda a estrutura dos produtos dentro dela'
     */
    listProdutosJSON.produtos = listProdutos

    //criando o nome da chave produtos
    //listaProdutosJSON.produtos = 'produto'

    //listaProdutosJSON.produtos = listaProdutos
    //listaProdutosJSON.clientes = listaNomes

    //Nome da variavel, nome da chave e o indice para pegar o meu objeto
    //console.log(listaProdutosJSON.produtos[1])

    //console.log(listaProdutosJSON)

    //console.log(listaProdutosJSON.clientes[2])

    //console.log(listProdutosJSON)

    //Localizando informação pelo indice
    //console.log("Nome: "+listProdutosJSON.produtos[1].nome)
    //console.log("Valor: "+listProdutosJSON.produtos[1].valor)
    //console.log("Cor "+listProdutosJSON.produtos[1].cores[1])

    /**********************************************************************************************
     * Usando estrutura de repeição para verificar trazer todos os dados Json de forma organizada */

    console.log('Percorrendo listProdutos e Array usando ForEach: ')

    //Retorna todos os dados de produto (1 nivel do dados do JSON), dadosProduto da funcion me retorna o valor
    listProdutosJSON.produtos.forEach(function (dadosProduto) {

        console.log('Nome: ' + dadosProduto.nome)
        console.log('Valor: ' + dadosProduto.valor)



        //Validação para tratar quando não existe cores de produto
        if (dadosProduto.cores != undefined) {
            //Retorna as cores existentes de cada produto
            dadosProduto.cores.forEach(function (dadosCores) {
                console.log(' ** ' + dadosCores)
            })
        }

        //Validação para tratar quando não existe tipos de produto
        if (dadosProduto.tipo != undefined) {
            //Retorna os tipos existentes para cada produto
            dadosProduto.tipo.forEach(function (dadosTipo) {
                console.log(' *** ' + dadosTipo)
            })
        }

    })

}

listagemProdutos()

