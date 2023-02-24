const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn =>  btn.addEventListener('click', filtrarLivros))

btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarPorDisponiblidade() : filtrarPorCategoria(categoria)
        exibirOsLivrosNaTela(livrosFiltrados)
        if (categoria == 'disponivel') {
            const valorTotal = CalcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
            exibirValorTotalDosLivrosDisponveisNaTela(valorTotal)
        }
}

function filtrarPorDisponiblidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}


function exibirValorTotalDosLivrosDisponveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}