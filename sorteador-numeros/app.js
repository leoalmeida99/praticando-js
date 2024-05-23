let getLabelTextoParagrafo = document.getElementById('resultado').querySelector('.texto__paragrafo');
let getButtonReiniciar = document.getElementById('btn-reiniciar');

let getInputQuantidade = document.getElementById('quantidade');
let getInputDe = document.getElementById('de');
let getInputAte = document.getElementById('ate');

function sortear() {
    let quantidadeDeNumeros = getInputQuantidade.value;
    let doNumero = getInputDe.value;
    let ateONumero = getInputAte.value;
    let numeros = [];
    let valorAleatorio;

    if (isEntradasInvalidas()) return;

    getButtonReiniciar.classList.remove('container__botao-desabilitado');
    getButtonReiniciar.classList.add('container__botao');

    if (doNumero == ateONumero) {
        getLabelTextoParagrafo.textContent = `Números sorteados:  ${doNumero}`;
        return;
    }

    if (doNumero > ateONumero) {
        let temp = doNumero;
        doNumero = ateONumero;
        ateONumero = temp;
    }

    let diferencaAteONumeroEDoNumero = ateONumero - doNumero;
    if (diferencaAteONumeroEDoNumero <= quantidadeDeNumeros) quantidadeDeNumeros = diferencaAteONumeroEDoNumero;
    while(quantidadeDeNumeros--) {
        valorAleatorio = Math.floor(Math.random() * (ateONumero - doNumero + 1)) + doNumero;
        while (numeros.includes(valorAleatorio)) {
            valorAleatorio = Math.floor(Math.random() * (ateONumero - doNumero + 1)) + doNumero;
        }
        numeros.push(valorAleatorio);
    }

    getLabelTextoParagrafo.textContent = 'Números sorteados: ' + numeros;
}

function isEntradasInvalidas() {
    let elementos = document.getElementsByClassName('container__campo');
    let contadorEntradasInvalidas = 0;
    let camposInvalidos;
    let paresLabelInput = [];
    let labelsInvalidas = [];
    
    Array.from(elementos).forEach(element => {
        let label = element.querySelector('label').textContent;
        let input = element.querySelector('input').value;
        
        paresLabelInput.push({ label: label, input: input });
    });
    
    paresLabelInput.forEach(element => {
        if (element.input == '') {
            labelsInvalidas.push(element.label);
            contadorEntradasInvalidas++;
        }
    });

    if (contadorEntradasInvalidas == 0) return false;
        
    if (contadorEntradasInvalidas == paresLabelInput.length) {
        getLabelTextoParagrafo.textContent = 'Preencha todos os campos corretamente';
        return true;
    }

    if (contadorEntradasInvalidas == 2) {
        camposInvalidos = `${labelsInvalidas[0]} e ${labelsInvalidas[1]}`;
        getLabelTextoParagrafo.textContent = `Os campos: ${camposInvalidos.toLowerCase()}, estão inválidos` ;
        return true;
    }
    
    if (labelsInvalidas) {
        getLabelTextoParagrafo.textContent = `O campo: ${labelsInvalidas[0].toLowerCase()}, está inválido`;
        return true;
    }
}

function reiniciar() {
    getInputQuantidade.value = '';
    getInputDe.value = '';
    getInputAte.value = '';

    getButtonReiniciar.classList.remove('container__botao');
    getButtonReiniciar.classList.add('container__botao-desabilitado');

}