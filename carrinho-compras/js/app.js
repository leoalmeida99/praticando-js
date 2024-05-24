getProdutoSelecionado = document.getElementById('produto');

function adicionar() {
    quantidadeProduto = parseInt(document.getElementById('quantidade').value);
    valorProduto = parseInt(getProdutoSelecionado.value.split('-')[1].substring(3));
    nomeProduto = getProdutoSelecionado.value.split('-')[0];

    if (isNaN(quantidadeProduto)) return;

    carinho = document.getElementById('lista-produtos');
    carinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`;
    
    atualizarValor(valorProduto, quantidadeProduto);
}

function atualizarValor(valorProduto, quantidadeProduto) {
    tagValorTotal = document.getElementById('valor-total');

    if (tagValorTotal.textContent == '') {
        valorAtual = 0;
    } else {
        valorAtual = parseInt(tagValorTotal.textContent.substring(2));
    }

    valorTotal = (valorProduto * quantidadeProduto) + valorAtual;

    tagValorTotal.textContent = `R$${valorTotal}`
}