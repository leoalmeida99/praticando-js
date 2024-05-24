let getProdutoSelecionado = document.getElementById('produto');
let getInputQuantidade = document.getElementById('quantidade');
let tagValorTotal = document.getElementById('valor-total');
function adicionar() {
    quantidadeProduto = parseInt(getInputQuantidade.value);
    valorProduto = parseInt(getProdutoSelecionado.value.split('-')[1].substring(3));
    nomeProduto = getProdutoSelecionado.value.split('-')[0];

    if (isNaN(quantidadeProduto)) return;

    carinho = document.getElementById('lista-produtos');
    carinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`;
    
    atualizarValor(valorProduto, quantidadeProduto);
}

function atualizarValor(valorProduto, quantidadeProduto) {

    if (tagValorTotal.textContent == '') {
        valorAtual = 0;
    } else {
        valorAtual = parseInt(tagValorTotal.textContent.substring(2));
    }

    valorTotal = (valorProduto * quantidadeProduto) + valorAtual;

    tagValorTotal.textContent = `R$${valorTotal}`
}

function limpar() {
    var elementos = document.getElementsByClassName('carrinho__produtos__produto');
    var pai = elementos[0].parentNode;
    pai.innerHTML = '';

    tagValorTotal.textContent = 'R$0';
    getInputQuantidade.value = '';
}