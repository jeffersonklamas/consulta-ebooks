// Consulta eBooks disponíveis
// Se a resposta for sim, mostra as categorias dispníveis e questiona qual categoria o usuário escolhe
// Se a resposta for não, é mostrado todos os eBooks em ordem de tamanho.
// Exportando o database

const ebooks = require('./database')

// Pegar input do usuário

const listaEbooks = require('readline-sync')

const inicialentrada = listaEbooks.question('Deseja consultar um eBook? (S/N) ')

if (inicialentrada.toLocaleUpperCase() == 'S') {
    console.log('Categorias disponíveis: ')

    var ebooks2 = ('Ficção, Auto-Ajuda, Produtividade, Software, Mecânica Quântica, Literatura, Estatística')
    
    console.log(ebooks2)

    const categoriaEscolhida = listaEbooks.question('Digite a categoria desejada: ')

    const retorno = ebooks.filter(ebooks => ebooks.Categoria === categoriaEscolhida)

    console.table(retorno)
} else {

    const ebooksOrdenados = ebooks.sort((a,b) => a.Leu- b.Leu)
    console.log('Esses são todos os eBooks disponíveis:')
    // console.table(ebooksOrdenados, ['Nome', 'Autor', 'Categoria'])
    console.table(ebooksOrdenados)
}



