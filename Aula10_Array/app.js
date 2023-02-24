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

const removerElemento = function(array,nomeItem) {
    //Cria uma cópia da Array
    let novaLista = array.slice() 

    let nome = nomeItem

    //Remove o item selecionado da nova lista
    let indice = novaLista.indexOf(nome)
    let status 

    //  splice - permite remover elementos do Array pelo indice
    //  Não esquecer de passar a quantidade de itens a ser removida
    if(indice >= 0){
        novaLista.splice(indice,1) //Remover apenas aquele indice
        status = true
    }else{
        status = false
    }

    if(status){
        return novaLista
    }else{
        return status
    }

}

console.log(removerElemento(listaProdutos,'Teclado'))
console.log(listaProdutos)