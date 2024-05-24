function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = parseInt(document.getElementById('qtd').value);
    let getQtdIngressoDisponivel = document.getElementById(`qtd-${tipoIngresso}`);
    let quantidadeIngressoDisponivel = parseInt(getQtdIngressoDisponivel.textContent);

    if (isNaN(qtdIngresso) || qtdIngresso == 0) return;

    if (qtdIngresso > quantidadeIngressoDisponivel) {
        alert('Não será possível a compra do ingresso')
    } else {
        quantidadeIngressoDisponivel -= qtdIngresso;
        getQtdIngressoDisponivel.textContent = quantidadeIngressoDisponivel;
    }

}