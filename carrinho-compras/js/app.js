var getProdutosCarrinho = document.getElementsByClassName('carrinho__produtos__produto')
let getProdutoSelecionado = document.getElementById('produto');
let getInputQuantidade = document.getElementById('quantidade');
let tagValorTotal = document.getElementById('valor-total');
let carinhoAtual = [];

function adicionar() {
    quantidadeProduto = parseInt(getInputQuantidade.value);
    valorProduto = parseInt(getProdutoSelecionado.value.split('-')[1].substring(3));
    nomeProduto = getProdutoSelecionado.value.split('-')[0];

    if (isNaN(quantidadeProduto)) return;

    atualizarCarrinho(nomeProduto, quantidadeProduto, valorProduto);
    atualizarValor(valorProduto, quantidadeProduto);
}


function atualizarCarrinho(nomeProduto, quantidadeProduto, valorProduto) {
    verificaSePossuiProdutoRepetido(nomeProduto, quantidadeProduto, valorProduto);
    limpaCarrinho();

    carinhoAtual.forEach(function(produto) {
        document.getElementById('lista-produtos').innerHTML += 
        `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${produto.quantidade}x</span> ${produto.nome} <span class="texto-azul">R$${produto.valor}</span>
        </section>`;
    });
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
    limpaCarrinho();

    tagValorTotal.textContent = 'R$0';
    getInputQuantidade.value = '';
    carinhoAtual = [];
}

function verificaSePossuiProdutoRepetido(nomeProduto, quantidadeProduto, valorProduto) {
    let novoProduto = {
        nome: nomeProduto,
        quantidade: quantidadeProduto,
        valor: valorProduto
    };

    for (let i = 0; i < carinhoAtual.length; i++) {
        if (carinhoAtual[i].nome == nomeProduto && carinhoAtual[i].valor == valorProduto) {
            carinhoAtual[i].quantidade += quantidadeProduto;
            return;
        }
    }
    
    carinhoAtual.push(novoProduto);
}

function limpaCarrinho() {
    var elementos = getProdutosCarrinho ? getProdutosCarrinho : '';
    var pai = elementos[0] ? elementos[0].parentNode : '';
    pai.innerHTML = '';
}